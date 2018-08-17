import Vue from 'vue'
import VueRouter from 'vue-router' // get vue router library
import App from './App'
import store from './store'
import AuthHandler from './components/AuthHandler'

Vue.use(VueRouter) // tell vue to use the vue router

const router = new VueRouter({
  mode: 'history', // removes hash in url
  routes: [
    { path: '/oauth2/callback', component: AuthHandler }
  ]
})

new Vue({
  router, // registers the VueRouter; can be written router: router,
  store,  // registers the Vuex data; can also be written as store: store,
  render: h => h(App) // the render method
}).$mount(('#app'))