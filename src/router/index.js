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
import officeHall from '@/components/officeHall/index'
import personalCenter from '@/components/personalCenter/index'
import peopleHome from '@/components/officeHall/peopleHome'
import serveCenter from '@/components/officeHall/serveCenter'
// import personalCenter from '@/components/personalCenter/personalCenter'

Vue.use(Router)

export default new Router({
  routes: [
    // 首页
    {
      path: '/',
      name: 'newHomepage',
      component: newHomepage
    },
    // 应用中心
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
    // 办事大厅
    {
      path: '/officeHall',
      name: 'officeHall',
      component: officeHall,
      children: [
        {
          path: '/peopleHome',
          name: 'peopleHome',
          component: peopleHome
        },
        {
          path: '/serveCenter',
          name: 'serveCenter',
          component: serveCenter
        },
        // 这里是不是多余的
        {
          path: '',
          component: peopleHome
        }
      ]
    },
    // 个人信息
    {
      path: '/personalCenter',
      name: 'personalCenter',
      component: personalCenter,
      children: [
        // 这里是不是多余的
        {
          path: '',
          component: peopleHome
        }
      ]
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
