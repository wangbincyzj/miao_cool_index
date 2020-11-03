import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from "@/views/_layout/Layout";
import Layout404 from "@/views/_layout/Layout404";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: Layout,
    redirect: "/index",
    children: [
      {
        path: "/index",
        component: () => import("@/views/index/Index")
      }
    ]
  },
  {
    path: "/chat",
    component: Layout,
    redirect: "/client",
    children: [
      {
        path: "client",
        component: () => import("@/views/chat/Client")
      }
    ]
  },
  {
    path: "/chat",
    component: Layout,
    redirect: "/admin",
    children: [
      {
        path: "admin",
        component: () => import("@/views/chat/Admin")
      }
    ]
  },
  {
    path: "/*",
    component: Layout404
  }
]
/*
* https://imgchr.com/i/BrJQZ6
https://imgchr.com/i/BrJldK
https://imgchr.com/i/BrJ1IO
https://imgchr.com/i/BrJKqx
https://imgchr.com/i/BrJus1*/
const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
