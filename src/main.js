// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import MintUi from 'mint-ui'
import router from './router'
import Axios from 'axios'

Vue.config.productionTip = false

//使用mintui
Vue.use(MintUi)
import 'mint-ui/lib/style.css'

//配置axios公共的api Url
Axios.defaults.baseURL='http://jsonplaceholder.typicode.com/'
///挂在axios到vue实例中
Vue.prototype.$axios=Axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


///////////学习到axios2   14:17  大大大多