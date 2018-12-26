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

export const isMina = window.__wxjs_environment === 'miniprogram'

function _formatNavParams(params) {
  params = params.replace('?','&')
  return `${ENV.detailPage}?host=${location.protocol}//${location.host}${params}`
}
/* 路由 */
export function navigateTo(params) {
  console.log(ENV)
  console.log(_formatNavParams(params))
  if (isMina) {
    let url = _formatNavParams(params)
    wx.miniProgram.navigateTo({url})
  } else {
    _this.$router.push(params)
  }
}


// function navigateBack() {
// }
//
// function switchTab() {
//
// }
//
// function reLaunch() {
//
// }
//
// function redirectTo() {
//
// }
