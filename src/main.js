import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import login from './components/Login.vue'
import register from './components/Register.vue'
import userList from './components/UserListing.vue'
import memoryGame from './components/Memory-Game.vue'
import home from './components/Landing.vue'
import todo from './components/Todo.vue'
import movie from './components/Movies.vue'
import PageNotFound from './components/Page404.vue'
import UserManagement from './components/user-management.vue'
import Dashboard from './components/projects/dashboard.vue'
import ProjectManagement from './components/asana/Project-Management.vue'


Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  { path:  '/', component: login },
  { path:  '/login', component: login },
  { path: '/todo', component: todo },
  { path: '/movie', component: movie },
  { path: '/home', component: home },
  { path: '/memory-game', component: memoryGame },
  { path: '/register', component: register },
  { path: '/user-list', component: userList},
  { path: '/user-management', component: UserManagement},
  { path: '/project-management', component: ProjectManagement},
  { path: '/dashboard', component: Dashboard},
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
