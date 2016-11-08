import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App.vue'
import Home from './components/Home.vue'
import Post from './components/Post.vue'
import Login from './components/Login.vue'
import SignUp from './components/SignUp.vue'
import NotFound from './components/NotFound.vue'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueResource)

const store = new Vuex.Store({
  state: {
    username: ''
  },
  mutations: {
    setName (state, name) {
      state.username = name
    }
  }
})

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', component: Home},
    {path: '/post', component: Post},
    {path: '/login', component: Login},
    {path: '/signup', component: SignUp},
    {path: '*', component: NotFound}
  ]
})

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
