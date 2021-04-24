import Vue from 'vue'
import App from './App.vue'
import PrismicVue from '@prismicio/vue'

Vue.config.productionTip = false

const endpoint = process.env.VUE_APP_ENDPOINT
const accessToken = process.env.VUE_APP_ACCESS_TOKEN

// Register plugin
Vue.use(PrismicVue, {
  endpoint,
  apiOptions: { accessToken }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
