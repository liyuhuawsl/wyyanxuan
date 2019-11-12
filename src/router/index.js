import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/Home.vue';
import ClassIfy from '../pages/ClassIfy.vue';
import Identifying from '../pages/Identifying.vue';
import ShoppingCart from '../pages/ShoppingCart.vue';
import Personal from '../pages/Personal.vue';
import HomeList from '../components/HomeList/List.vue';
import ClassIfyList from '../components/ClassIfyList/List.vue';
import IdentifyingList from '../components/IdentifyingList/List.vue';
import ShoppingCartList from '../components/ShoppingCartList/List.vue';
import PersonalList from '../components/PersonalList/List.vue';
import Personallogin from '../components/PersonalList/personallogin.vue';
import Itemdetails from '../components/itemdetails.vue';


import Search from '../components/search.vue';
Vue.use(VueRouter)
const router = new VueRouter({
  mode: "hash",
  routes: [{
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'home',
    component: Home,
    children: [
      {
        path: '',
        redirect: 'list'
      }, {
        path: 'list',
        component: HomeList
      }
    ]
  }, {
    path: '/classify',
    name: 'classify',
    component: ClassIfy,
    children: [
      {
        path: '',
        redirect: '/classify/list'
      }, {
        path: 'list',
        name: 'classIfyList1',
        component: ClassIfyList,
      }, {
        path: 'list/:listId',
        name: 'classIfyList2',
        component: ClassIfyList
      }
    ]
  }, {
    path: '/identifying',
    name: 'identifying',
    component: Identifying,
    children: [
      {
        path: '',
        redirect: 'list'
      }, {
        path: 'list',
        component: IdentifyingList
      }
    ]
  }, {
    path: '/shoppingcart',
    name: 'shoppingcart',
    component: ShoppingCart,
    children: [
      {
        path: '',
        redirect: 'list'
      }, {
        path: 'list',
        component: ShoppingCartList
      }
    ]
  }, {
    path: '/personal',
    name: 'personal',
    component: Personal,
    children: [
      {
        path: '',
        redirect: 'list'
      }, {
        path: 'list',
        component: PersonalList
      }, {
        path: 'handle/:log',
        name: 'handle',
        component: Personallogin
      }
    ]
  }, {
    path: '/search',
    component: Search
  }, {
    path: '/itemdetails',
    component: Itemdetails
  },
  {
    path: '*',
    redirect: '/home'
  }]
})

export default router;