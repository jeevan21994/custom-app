import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import ProductUpdate from '../components/ProductUpdate.vue'
import Dashboard from '../components/Dashboard.vue'
import ProductAdd from '../components/ProductAdd.vue'
import ProductList from '../components/ProductList.vue'

import store from '../store/index'//state management
Vue.use(VueRouter)
  const routes = [
  {
    path: "/",
    redirect: "/login",
    meta: { layout: "login", isPublic: true }
},
{
      path:"/login",component:Login
  },
  {
    path:"/productupdate/:id",name:'productupdate', component:ProductUpdate
},
{
  path:"/productlist",name:'productlist', component:ProductList
},
{
  path:"/productadd", name:'productadd',component:ProductAdd
},
  {
    path : "/dashboard" ,name:"dashboard",component : Dashboard,
   beforeEach:(to ,from ,next)=>{
  if(store.state.authenticated == false){
    next(false);
  }else{
    next('/dashboard')
  }
}

},
]
// It is worth mentioning that Vue Router navigation methods (push, replace, go) 
const router = new VueRouter({
  mode: 'history',//three type abstract,hash,history
  base: process.env.BASE_URL,
  routes
})

export default router


// {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },