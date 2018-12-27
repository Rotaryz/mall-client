import Vue from 'vue'
import App from './App.vue'
import router from '@router'
import store from '@state/store'
import '@components/_globals'
import {Plugins} from '@utils/plugins'
import '@utils/mall-utils'
import '@utils/compatible'
import VueClipboard from 'vue-clipboard2'
import AwesomePicker from 'vue-awesome-picker'

VueClipboard.config.autoSetContainer = true

Vue.use(AwesomePicker)
Vue.use(Plugins)

Vue.config.productionTip = process.env.NODE_ENV === 'production'

if (window.Cypress) {
  Vue.config.errorHandler = window.Cypress.cy.onUncaughtException
}

export const app = new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')

if (window.Cypress) {
  window.__app__ = app
}
