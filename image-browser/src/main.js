import Vue from 'vue'
import App from './App'
import store from './store'

new Vue({
  store: store,  // connects the Vuex data
  render: h => h(App)
}).$mount(('#app'))