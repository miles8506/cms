// vuex module
import { Module } from 'vuex';

// api
import { loginApiFn } from '@/service/login/login';

// type
import type { loginType } from './type';
import type { IrootStore } from '../type';
import type { IaccountInfo } from '@/service/login/type';

const loginModule: Module<loginType, IrootStore> = {
  namespaced: true,
  state() {
    return {
      id: 0,
      token: '',
      userInfo: {}
    };
  },
  mutations: {
    changeLoginInfo(state, payload) {
      state.id = payload.id;
      state.token = payload.token;
    }
  },
  actions: {
    getLoginApi({ commit }, payload: IaccountInfo) {
      loginApiFn(payload)
        .then((res) => {
          const { id, token } = res.data;
          commit('changeLoginInfo', { id, token });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getLoginPhone(context, payload: any) {
      console.log(payload);
      console.log(context);
    }
  },
  getters: {}
};

export { loginModule };
