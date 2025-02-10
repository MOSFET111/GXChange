import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import MarketView from '@/views/MarketView.vue'
import AboutUsView from '@/views/AboutUsView.vue'
import ListingView from '@/views/ListingView.vue'
import AccountDetailsView from '@/views/AccountDetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/Market',
      name: 'Market',
      component: MarketView,
    },
    {
      path: '/About',
      name: 'About',
      component: AboutUsView,
    },
    {
      path: '/Listings',
      name: 'Listings',
      component: ListingView,
    },
    {
      path: '/AccountDetails',
      name: 'AccountDetails',
      component: AccountDetailsView,
    },

  ],
})

export default router
