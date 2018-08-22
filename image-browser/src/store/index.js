import Vuex from 'vuex' // access to vuex
import Vue from 'vue' // required to access vuex
import auth from './modules/auth' // import auth module
import images from './modules/images' // import images module

Vue.use(Vuex) // allows Vue and Vuex to communicate

export default new Vuex.Store({
  modules: {
    auth, // ES6 equivalent of auth: auth
    images // tell Vuex about the images module, === images: images
  }
}) 