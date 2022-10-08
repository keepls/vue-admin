import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import index from "../views/login/index.vue"
import Main from "../views/layout/main.vue"
import One from "../views/options/one.vue"
import Two from "../views/options/two.vue"
 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    {
      path:"/",
      name:"index",
      component:index
    },
    {
      path:"/main",
      name:"main",
      component:Main,
      children:[
        {
          name:"one",
          path:"one",
          component:One
        },
        {
          name:"two",
          path:"two",
          component:Two
        }
      ]
    },
    // {
    //   path:"/one",
    //   name:"one",
    //   component:One,
    //   children:[
    //     {
    //       path:"",
    //       component:""
    //     }
    //   ]
    // },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
