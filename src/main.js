// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入公共css
import "./assets/css/index.css";
import "./assets/js/flexible"

 // 全局使用dataV
import dataV from '@jiaminghi/data-view'
Vue.use(dataV)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
