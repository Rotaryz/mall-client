// const env = process.env
// const version = ``
//
// const LOCAL_URL = {
//   api: 'http://local.com'
// }
//
// const DEV_URL = {
//   api: 'https://zhidian-api.jerryf.cn'
// }
//
// const TEST_URL = {
//   api: 'https://zhidian-api.jkweixin.net'
// }
//
// const PROD_URL = {
//   api: 'https://zhidian-api.jkweixin.com' + version
// }

// export const BASE_URL =
//   env.NODE_ENV === 'production'
//     ? PROD_URL
//     : env.NODE_ENV === 'test'
//       ? TEST_URL
//       : env.NODE_ENV === 'development'
//         ? DEV_URL
//         : LOCAL_URL
import {ENV} from './mall-utils'

export const BASE_URL = ENV
export const ERR_OK = 0
