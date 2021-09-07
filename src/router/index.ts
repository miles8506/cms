import { createRouter, createWebHashHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

// utils
import { localCache } from '../utils/cache';

// vuex
import { firstMenu } from '@/store/login/login';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    component: () => import('@/views/login/login.vue'),
    name: 'login'
  },
  {
    path: '/main',
    component: () => import('@/views/main/main.vue'),
    name: 'main'
  },
  {
    path: '/:pathMatch(.*)',
    component: () => import('@/views/notFound/notFound.vue'),
    name: 'notfound'
  }
];

export const router = createRouter({
  routes: routes,
  history: createWebHashHistory()
});

// 每次router改變時檢查是否有token
router.beforeEach((to) => {
  if (to.path !== '/login') {
    const res = localCache.getLocalAccount('token');
    if (!res) return '/login';
  }

  // 預設一開始登入的url
  if (to.path === '/main') {
    return firstMenu.path;
  }
});
