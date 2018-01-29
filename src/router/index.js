import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ctz from '@/components/ctz'
import news from '@/components/news'
import duanzi from '@/components/duanzi'
import detail from '@/components/detail'
import navlist from '@/components/navlist'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/ctz',
      name: 'ctz',
      component: ctz
    },
     {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/duanzi',
      name: 'duanzi',
      component: duanzi
    },
     {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/navlist',
      name: 'navlist',
      component: navlist
    },

  ]
})
