import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import Home from './components/Home.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';
Vue.config.productionTip = false

Vue.use(VueRouter);
const routes = [
    { path: '/home',name: 'DOSCG', component: Home },
    { path: '/about',name: 'DOSCG1', component: About },
    { path: '/contact',name: 'DOSCG2', component: Contact },
  ]

const router = new VueRouter({ routes })

new Vue({
  router,
  render: h => h(App),
  el: '#app',
}).$mount('#app')



