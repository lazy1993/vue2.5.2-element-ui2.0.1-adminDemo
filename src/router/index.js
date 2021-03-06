/*
* @Author: yang
* @Date:   2017-10-23 10:33:06
* @Last Modified by:   yang
* @Last Modified time: 2017-11-06 14:09:54
*/

import Vue from 'vue'
import VueRouter from 'vue-router'
// import routes from './routes'
// 先加载静态页面部分
import {constantRoutes} from './routes'

// 使用路由组件
Vue.use(VueRouter)

// 创建路由
const router = new VueRouter({
  // mode: 'hisstory',    // 路由的模式
  // base: __dirname,
  // base: '/vue+vue-router+vuex+axios+element-ui+mock-demo/',
  // 如果使用对象简洁表示法只写constantRoutes
  // routes将加载失败
  // 而且且不会报错 --、
  routes: constantRoutes
});

export default router;
