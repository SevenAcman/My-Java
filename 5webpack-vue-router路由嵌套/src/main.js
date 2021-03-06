import Vue from 'vue'
//1.导入vue-router包
import VueRouter from 'vue-router'
//2.手动安装VueRouter
Vue.use(VueRouter)

//3.导入路由模块
import router from './router'

//导入app组件
import app from './App.vue'

let vm = new Vue({
    el: '#app',
    render: (c) => c(app),
    router //挂载路由对象
})