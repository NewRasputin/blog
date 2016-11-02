import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Home from './components/Home.vue'
import Post from './components/Post.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', component: Home},
  {path: '/post', component: Post}
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
