import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App.vue'
import Home from './components/Home.vue'
import Post from './components/Post.vue'
import Login from './components/Login.vue'
import NotFound from './components/NotFound.vue'


Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', component: Home},
    {path: '/post', component: Post},
    {path: '/login', component: Login},
    {path: '*', component: NotFound}
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
