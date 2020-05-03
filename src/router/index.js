import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

const Product = () => import('../views/Product')
const Params = () => import('../views/Params')
const Manage = () => import('../views/Manage')
const Login = () => import('../views/Login')

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/product' },
  { path: '/product', component: Product },
  { path: '/params', component: Params },
  { path: '/manage', component: Manage },
  {
    path: '/login',
    component: Login,
    meta: {
      isLogin: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.isLogin)) {
    next()
  } else {
    if (store.getters.token !== '') {
      next()
    } else {
      next('/login')
    }
  }
})

export default router
