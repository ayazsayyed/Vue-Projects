import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import login from './components/Login.vue'
import register from './components/Register.vue'
import userList from './components/UserListing.vue'
import home from './components/Landing.vue'
import PageNotFound from './components/Page404.vue'

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  { path: '/login', component: login },
  { path: '/', component: home },
  { path: '/home', component: home },
  { path: '/register', component: register },
  { path: '/user-list', component: userList},
  { path: "*", component: PageNotFound},
];

const router = new VueRouter({
  routes,
  mode:'history'
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
