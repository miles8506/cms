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

// utils
import { localCache } from '@/utils/cache';

const loginModule: Module<loginType, IrootStore> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenu: ''
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
    }
  },
  actions: {
    async getLoginApi({ commit }, payload: IaccountInfo) {
      try {
        // 驗證帳號密碼及接收token
        const loginApi = await loginApiFn(payload);
        const { token } = loginApi.data;
        commit('changeLoginInfo', { token });
        localCache.setLocalAccount('token', token);

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
    setupUserInfo({ commit }) {
      const token: string = localCache.getLocalAccount('token');
      if (token) {
        commit('changeLoginInfo', { token });
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

export { loginModule };
