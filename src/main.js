import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App.vue'
import Home from './components/Home.vue'
import Post from './components/Post.vue'

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  routes: [
    {path: '/', component: Home},
    {path: '/post', component: Post}
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
