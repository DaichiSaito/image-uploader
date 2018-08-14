import Vue from 'vue'
import App from './App'
import store from './store'

new Vue({
  store,  // connects the Vuex data; can also be written as store: store,
  render: h => h(App)
}).$mount(('#app'))