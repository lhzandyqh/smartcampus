import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import loginPage from '@/components/loginPage' // 这是老版登录页
// import iconpage from '@/components/iconPage' // 这是老版内容页
import newHomepage from '@/components/newHomepage' // 这是新版首页
import scheduleManagement from '@/components/educationalAdministration/scheduleManagement'
import applicationPage from '@/components/applicationPage'
import testConponent1 from '@/components/educationalAdministration/testConponent1'
import testConponent2 from '@/components/educationalAdministration/testConponent2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'newHomepage',
      component: newHomepage
    },
    {
      path: '/applicationPage',
      name: 'applicationPage',
      component: applicationPage
      // children: [
      //   {
      //     path: 'scheduleManagement',
      //     name: 'scheduleManagement',
      //     component: scheduleManagement
      //   }
      // ]
    },
    // 课表管理
    {
      path: '/scheduleManagement',
      name: 'newHomepage',
      component: scheduleManagement,
      children: [
        {
          path: 'test1',
          name: 'test1',
          component: testConponent1
        },
        {
          path: 'test2',
          name: 'test2',
          component: testConponent2
        },
        {
          path: '',
          component: testConponent1
        }
      ]
    }
  ]
})
