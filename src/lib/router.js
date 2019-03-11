import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 导入组件
import login from '../components/login.vue'
import index from '../components/index.vue'
import users from '../components/users.vue'

// 规则
let routes = [
  {
    path: '/login',
    component: login
  },
  // 首页
  {
    path: '/',
    component: index,
    children: [
      {
        path: 'users',
        component: users
      }
    ]
  }
]

// 路由对象
let router = new VueRouter({
  routes
})

// 注册(添加)导航守卫 前置守卫
router.beforeEach((to, from, next) => {
  // to去哪
  console.log(to);
  // from 从哪来
  // console.log(from);
  if (to.path == '/login') {
    // 直接放过去
    next()
  } else {
    // 不是登录页
    if (window.sessionStorage.getItem('token')) {
      // 登录了
      next()
    } else {
      // 提示用户 this不是Vue实例 无法访问$message
      // this.$message.warning('哥们请登录')
      Vue.prototype.$message.warning('哥们请先登录')
      // 没有登录
      next('/login')
    }
  }
  // 必须要next
  // next();
})

// 暴露
export default router
