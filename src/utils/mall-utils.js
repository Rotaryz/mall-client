import wx from 'weixin-js-sdk'
import {app as _this} from '@src/main'
import DEBUG_CONFIG from './debug-config'
// 判断是否为小程序环境
function _checkIsMina() {
  // window.navigator.userAgent属性包含了浏览器类型、版本、操作系统类型、浏览器引擎类型等信息，这个属性可以用来判断浏览器类型
  let ua = '' + window.navigator.userAgent.toLowerCase()
  // 通过正则表达式匹配ua中是否含有MicroMessenger字符串且是IOS系统
  let isMina = window.__wxjs_environment === 'miniprogram'
  let isAndroid = /Android|Adr/i.test(ua) // 是Android系统
  return isMina || isAndroid
}
export const isMina = _checkIsMina()
alert(isMina)

/* 全局参数 */
function _getSearch() {
  let args = {}
  let query = location.search.substring(1)
  let pairs = query.split('&')
  for (let i = 0; i < pairs.length; i++) {
    let pos = pairs[i].indexOf('=')
    if (pos === -1) {
      continue
    }
    let name = pairs[i].substring(0, pos)
    let value = pairs[i].substring(pos + 1)
    args[name] = value.replace(/%3A%2F%2F/,'//')
  }
  return args
}
// 调试模式
let envConfig = {}
if (isMina) {
  envConfig = _getSearch()
} else {
  envConfig = DEBUG_CONFIG
}
export const ENV = envConfig
console.log(ENV)
/**
 * 参数转换
 * @param params 要跳转的路径
 * @param targetPage 小程序页面
 * @returns {string}
 * @private
 */
function _formatNavParams(params, targetPage) {
  params = params.replace('?','&')
  let minaPage = ENV[targetPage] || ENV._mainPage
  return `${minaPage}?host=${location.protocol}//${location.host}${params}`
}

/* 路由参考小程序api */
export function navigateTo(params, targetPage) {
  if (isMina) {
    let url = _formatNavParams(params, targetPage)
    wx.miniProgram && wx.miniProgram.navigateTo({url})
  } else {
    _this && _this.$router && _this.$router.push(params)
  }
}

export function navigateBack(delta = 1) {
  if (isMina) {
    wx.miniProgram && wx.miniProgram.navigateBack({delta})
  } else {
    _this && _this.$router && _this.$router.go(-delta)
  }
}

export function switchTab(params, targetPage) {
  if (isMina) {
    let url = _formatNavParams(params, targetPage)
    wx.miniProgram && wx.miniProgram.switchTab({url})
  } else {
    _this && _this.$router && _this.$router.replace(params)
  }
}

export function reLaunch(params, targetPage) {
  if (isMina) {
    let url = _formatNavParams(params, targetPage)
    wx.miniProgram && wx.miniProgram.reLaunch({url})
  } else {
    _this && _this.$router && _this.$router.replace(params)
  }
}

export function redirectTo(params, targetPage) {
  if (isMina) {
    let url = _formatNavParams(params, targetPage)
    wx.miniProgram && wx.miniProgram.redirectTo({url})
  } else {
    _this && _this.$router && _this.$router.replace(params)
  }
}

export const $wechat = {
  navigateTo,
  navigateBack,
  switchTab,
  reLaunch,
  redirectTo
}
