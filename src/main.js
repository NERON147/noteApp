import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

const note = JSON.parse(localStorage.getItem('note'))

if(note) {
  store.dispatch('setNoteFromLC', note)
}

import '@/assets/main.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
