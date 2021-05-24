import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import loginPage from '@/components/loginPage' // 这是老版登录页
// import iconpage from '@/components/iconPage' // 这是老版内容页
import newHomepage from '@/components/newHomepage' // 这是新版首页

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'newHomepage',
      component: newHomepage
    }
    // {
    //   path: '/iconpage',
    //   name: 'iconpage',
    //   component: iconpage
    // }
  ]
})
