import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// import Home from '/components/Home'
import Meetups from './components/Meetup/Meetups'
import CreateMeetups from './components/Meetup/CreateMeetups'
import Profile from './components/User/Profile'
import Signing from './components/User/Signing'
import Signup from './components/User/Signup'
import meetup from './components/Meetup/meetup'
import converter from './components/Meetup/converter.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path:'/home',
    //   name:Home,
    //   component:Home
    // },
    {
      path: '/converter',
      name: 'converter',
      component: converter
    },
    {
      path: '/meetup/new',
      name: 'CreateMeetups',
      component: CreateMeetups
    },
    {
      path: '/meetups/:id',
      name: 'meetup',
      props: true,
      component: meetup
    },
    {
      path: '/meetups',
      name: Meetups,
      component: Meetups

    },


    {
      path: '/profile',
      name: Profile,
      component: Profile
    },
    {
      path: '/Signing',
      name: Signing,
      component: Signing
    },
    {
      path: '/Signup',
      name: Signup,
      component: Signup
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})