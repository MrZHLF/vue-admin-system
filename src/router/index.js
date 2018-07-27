import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect: '/dashboard'
    },
    {
      path: '/login',
      component: resolve => require(['../components/page/Login.vue'], resolve),
    },
    {
      path: '/',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      meta: { title: '自述文件' },
      children:[
        {
          path: '/dashboard',
          component: resolve => require(['../components/page/Dashboard.vue'], resolve),
          meta: { title: '首页' },
        },
        {
          path: '/table',
          component: resolve => require(['../components/page/BaseTable.vue'], resolve),
          meta: { title: '基础表格' },
        },
        {
          path: '/tabs',
          component: resolve => require(['../components/page/Tabs.vue'], resolve),
          meta: { title: 'tab选项卡' },
        },
        {
          path: '/form',
          component: resolve => require(['../components/page/formcorrelation/BaseForm.vue'], resolve),
          meta: { title: '基本表单' },
        },
        {
          path: '/editor',
          component: resolve => require(['../components/page/formcorrelation/VueEditor.vue'], resolve),
          meta: { title: '富文本编辑器' },
        },
        {
          path: '/markdown',
          component: resolve => require(['../components/page/formcorrelation/Markdown.vue'], resolve),
          meta: { title: 'Markdown编辑器' },
        },
        {
          path: '/upload',
          component: resolve => require(['../components/page/formcorrelation/Upload.vue'], resolve),
          meta: { title: '文件上传' },
        },
				{
					path: '/userlist',
					component: resolve => require(['../components/page/datalist/UserList.vue'], resolve),
					meta: { title: '用户列表' },
				},
				{
					path: '/shoplist',
					component: resolve => require(['../components/page/datalist/ShopList.vue'], resolve),
					meta: { title: '商家列表' },
				},
				{
					path: '/foodlist',
					component: resolve => require(['../components/page/datalist/FoodList.vue'], resolve),
					meta: { title: '食品列表' },
				},
				{
					path: '/orderlist',
					component: resolve => require(['../components/page/datalist/OrderList.vue'], resolve),
					meta: { title: '订单列表' },
				},
        {
          path: '/charts',
          component: resolve => require(['../components/page/BaseCharts.vue'], resolve),
          meta: { title: 'chasts图表' },
        }
      ]
    },
    {
      path: '/404',
      component: resolve => require(['../components/page/404.vue'], resolve)
    }
  ],
  model:history
})
