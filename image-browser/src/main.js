import Vue from 'vue'
import VueRouter from 'vue-router' // get vue router library
import App from './App'
import store from './store'
import AuthHandler from './components/AuthHandler'
import ImageList from './components/ImageList'
import UploadForm from './components/UploadForm'

Vue.use(VueRouter) // tell vue to use the vue router

export const router = new VueRouter({
  mode: 'history', // removes hash in
  routes: [
    { path: '/', component: ImageList },
    { path: '/upload', component: UploadForm },
    { path: '/oauth2/callback', component: AuthHandler }
  ]
})

new Vue({
  router, // registers the VueRouter; can be written router: router,
  store,  // registers the Vuex data; can also be written as store: store,
  render: h => h(App) // the render method
}).$mount(('#app'))