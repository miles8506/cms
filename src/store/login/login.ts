// vuex module
import { Module } from 'vuex';

// api
import { loginApiFn, userMenuApiFn, userInfoFn } from '@/service/login/login';

// router
import { router } from '../../router/index';

// type
import type { loginType } from './type';
import type { IrootStore } from '../type';
import type { IaccountInfo } from '@/service/login/type';
import type { RouteRecordRaw } from 'vue-router';

// utils
import { localCache } from '@/utils/cache';
import { mapMenu, permissionUserSave } from '@/utils/mapMenu';

let firstMenu: any = null;

const loginModule: Module<loginType, IrootStore> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenu: '',
      userPermission: []
    };
  },
  mutations: {
    changeLoginInfo(state, payload) {
      state.token = payload.token;
    },
    changeUserInfo(state, payload) {
      state.userInfo = payload.info;
    },
    changeLoginMenu(state, payload) {
      state.userMenu = payload.menu;

      // 動態創建suer menu
      let mainChildRoute: RouteRecordRaw[] = [];

      // 動態獲取user menu
      mainChildRoute = mapMenu(payload.menu);
      mainChildRoute.forEach((route) => {
        router.addRoute('main', route);
        if (!firstMenu) firstMenu = route;
      });

      // user permission
      const permission = permissionUserSave(state.userMenu);
      state.userPermission = permission;
    }
  },
  actions: {
    async getLoginApi({ commit, dispatch }, payload: IaccountInfo) {
      try {
        // 驗證帳號密碼及接收token
        const loginApi = await loginApiFn(payload);
        const { token } = loginApi.data;
        commit('changeLoginInfo', { token });
        localCache.setLocalAccount('token', token);

        // 獲取role&department list數據
        dispatch('initialDataAciton', null, { root: true });

        // 獲取user info
        const userInfo = await userInfoFn(loginApi.data.id);
        commit('changeUserInfo', { info: userInfo.data.role });
        localCache.setLocalAccount('info', userInfo.data.role);

        // 獲取user 權限
        const userMenuApi = await userMenuApiFn(userInfo.data.role.id);
        commit('changeLoginMenu', { menu: userMenuApi.data });
        localCache.setLocalAccount('user_menu', userMenuApi.data);
        router.push('/main');
      } catch (err) {
        console.log(err);
      }
    },
    setupUserInfo({ commit, dispatch }) {
      const token: string = localCache.getLocalAccount('token');
      if (token) {
        commit('changeLoginInfo', { token });

        // 獲取role&department list數據
        dispatch('initialDataAciton', null, { root: true });
      }
      const info = localCache.getLocalAccount('info');
      if (info) {
        commit('changeUserInfo', { info });
      }
      const menu = localCache.getLocalAccount('user_menu');
      if (menu) {
        commit('changeLoginMenu', { menu });
      }
    }
  },
  getters: {}
};

export { loginModule, firstMenu };
