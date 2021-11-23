import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: Home,
    component: Home,
    children: [
      {
        path: '/DataStatics',
        name: 'DataStatics',
        component: () => import('../views/DataStatics.vue'),
      },
      {
        path: '/Project',
        name: 'Project',
        component: () => import('../views/Project.vue'),
      },
      {
        path: '/Resource',
        name: 'Resource',
        component: () => import('../views/Resource.vue'),
      },
      {
        path: '/Database',
        name: 'Database',
        component: () => import('../views/Database.vue'),
      },
      {
        path: '/Monitor',
        name: 'Monitor',
        component: () => import('../views/Monitor.vue'),
      },
      {
        path: '/Security',
        name: 'Security',
        component: () => import('../views/Security.vue'),
      },
    ],
  },
  {
    path: '/TinymceText',
    name: 'TinymceText',
    component: () => import(/* webpackChunkName: "activityconfiguration" */ '../views/TinymceText.vue'),
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;
