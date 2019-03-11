import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// Vue.config.productionTip = true

// 导入 router
import router from './lib/router'

// 导入饿了么ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// 导入抽取的axios插件
import http from './lib/http'
Vue.use(http)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
