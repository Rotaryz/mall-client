/* eslint-disable */
export function wxPay(res) {
  _addListener()
  return new Promise((resolve, reject) => {
    let params = _formatResData(res)
    WeixinJSBridge.invoke('getBrandWCPayRequest', params, resolve, reject)
  })
}

function _addListener() {
  if (document.addEventListener) {
    document.addEventListener('WeixinJSBridgeReady', wxPay, false)
  } else if (document.attachEvent) {
    document.attachEvent('WeixinJSBridgeReady', wxPay)
    document.attachEvent('onWeixinJSBridgeReady', wxPay)
  }
}

function _formatResData(res) {
  let resData = res.data
  return {
    appId: resData.appId,
    timeStamp: resData.timestamp,
    nonceStr: resData.nonceStr,
    package: resData.package,
    signType: resData.signType,
    paySign: resData.paySign
  }
}
// WeixinJSBridge.invoke(
//   'getBrandWCPayRequest', {
//     'appId': 'wx2421b1c4370ec43b',     // 公众号名称，由商户传入
//     'timeStamp': '1395712654',         // 时间戳，自1970年以来的秒数
//     'nonceStr': 'e61463f8efa94090b1f366cccfbbb444', // 随机串
//     'package': 'prepay_id=u802345jgfjsdfgsdg888',
//     'signType': 'MD5',         // 微信签名方式：
//     'paySign': '70EA570631E4BB79628FBCA90534C63FF7FADD89' // 微信签名
//   },
//   function (res) {
//     if (res.err_msg === 'get_brand_wcpay_request:ok') {
//       // 使用以上方式判断前端返回,微信团队郑重提示：
//       // res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
//     }
