import wx from 'weixin-js-sdk'
import {app as _this} from '@src/main'
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

export const ENV = _getSearch()

// 判断是否为小程序环境
export const isMina = window.__wxjs_environment === 'miniprogram'

/**
 * 参数转换
 * @param params 要跳转的路径
 * @param targetPage 小程序页面
 * @returns {string}
 * @private
 */
function _formatNavParams(params, targetPage) {
  params = params.replace('?','&')
  let minaPage = ENV[targetPage] || ENV._secondPage
  return `${minaPage}?host=${location.protocol}//${location.host}${params}`
}

/* 路由参考小程序api */
export function navigateTo(params, targetPage) {
  if (isMina) {
    let url = _formatNavParams(params, targetPage)
    wx.miniProgram.navigateTo({url})
  } else {
    _this.$router.push(params)
  }
}

export function navigateBack(delta = 1) {
  if (isMina) {
    wx.miniProgram.navigateBack({delta})
  } else {
    _this.$router.go(-delta)
  }
}

export function switchTab(params, targetPage) {
  if (isMina) {
    let url = _formatNavParams(params, targetPage)
    wx.miniProgram.switchTab({url})
  } else {
    _this.$router.replace(params)
  }
}

export function reLaunch(params, targetPage) {
  if (isMina) {
    let url = _formatNavParams(params, targetPage)
    wx.miniProgram.reLaunch({url})
  } else {
    _this.$router.replace(params)
  }
}

export function redirectTo(params, targetPage) {
  if (isMina) {
    let url = _formatNavParams(params, targetPage)
    wx.miniProgram.redirectTo({url})
  } else {
    _this.$router.replace(params)
  }
}

export const $wechat = {
  navigateTo,
  navigateBack,
  switchTab,
  reLaunch,
  redirectTo
}
