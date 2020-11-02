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

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
