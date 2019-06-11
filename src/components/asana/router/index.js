import Vue from "vue"
import Router from "vue-router"
import Dashboard from "./../Project-Management.vue"
import TaskBoard from "./../TaskListBoard.vue"

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "project-management/dashboard"
    },
    {
      path: "project-management/dashboard",
      name: "dashboard",
      component: Dashboard
    },
    {
      path: "project-management/boards/:id",
      name: "task-board",
      component: TaskBoard
    }
  ]
})

export default router