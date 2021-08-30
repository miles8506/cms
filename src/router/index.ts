import { createRouter, createWebHashHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

// utils
import { localCache } from '../utils/cache';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    component: () => import('@/views/main/main.vue')
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
    if (!res) router.push('/login');
  }
});
