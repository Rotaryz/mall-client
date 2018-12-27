'use strict'

import axios from 'axios'
// import storage from 'storage-controller'
import * as Utils from './request-utils'
import {BASE_URL} from './config'

const TIME_OUT = 10000
const ERR_OK = 0
const ERR_NO = -404
const COMMON_HEADER = {}

const http = axios.create({
  baseURL: BASE_URL.api,
  timeout: TIME_OUT,
  headers: COMMON_HEADER
})

http.interceptors.request.use(
  (config) => {
    // 请求数据前的拦截
    config.headers['Access-Token'] = BASE_URL.token
    config.headers['Merchant-Uid'] = BASE_URL.merchantUid
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

http.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.resolve(error.response)
  }
)

function checkStatus(response) {
  // _loading
  // 如果http状态码正常，则直接返回数据
  if (
    response &&
    (response.status === 200 || response.status === 201 || response.status === 304 || response.status === 422)
  ) {
    return response
    // 如果不需要除了data之外的数据，可以直接 return response.data
  }
  // 异常状态下，把错误信息返回去
  return {
    status: ERR_NO,
    msg: '网络异常'
  }
}

function checkCode(res) {
  // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  if (res.status === ERR_NO) {
    console.warn(res.msg)
  }
  // 如果网络请求成功，而提交的数据，或者是后端的一些未知错误所导致的，可以根据实际情况进行捕获异常
  if (res.data && res.data.code !== ERR_OK) {
    Utils.handleErrorType(res.data.code)
    throw requestException(res)
  }
  return res.data
}

function requestException(res) {
  const error = {}
  error.statusCode = res.status
  const serviceData = res.data
  if (serviceData) {
    error.code = serviceData.code
    error.error = serviceData.error
    error.message = serviceData.message
    error.serverData = serviceData
  }
  return error
}


// http请求
const methodArr = ['get', 'post', 'put', 'delete']
const HTTP = {}
methodArr.forEach((item) => {
  let method = item.toUpperCase()
  HTTP[item] = (...args) => {
    // 路径 数据 loading toast 中间件方法名称 自定义的方法...
    const [url, data, loading = true, ,middleFnName] = args
    Utils.showLoading(loading)
    return http({
      method,
      url,
      data,
      params: data
    }).then((response) => {
      return checkStatus(response)
    })
    .then((res) => {
      return checkCode(res)
    })
    .then((res) => {
      let fn = Utils[middleFnName] // 调用中间件的方法
      return fn ? fn(res, ...args) : res
    })
  }
})
export default HTTP
