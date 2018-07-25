// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import VueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueResource);
/* eslint-disable no-new */
// 使用钩子函数对路由权限跳转
/*  router.beforeEach((to, form, next) =>{
  const role = localStorage.getItem('ms_username')
  if(!role && to.path !== '/login') {
    next('/login')
  }
})  */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
