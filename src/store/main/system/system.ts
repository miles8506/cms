// service
import { requestSystemPage } from '@/service/main/system/system';

//type
import { Module } from 'vuex';
import type { IsystemType } from './type';
import type { IrootStore } from '../../type';

const system: Module<IsystemType, IrootStore> = {
  namespaced: true,
  state() {
    return {
      pageList: [],
      totalCount: 0
    };
  },
  mutations: {
    setPageList(state, payload: any[]) {
      state.pageList = payload;
    },
    setTotalCount(state, payload: number) {
      state.totalCount = payload;
    }
  },
  actions: {
    async getPageAction({ commit }, payload: any) {
      try {
        const res = await requestSystemPage(payload);
        commit('setPageList', res.data.list);
        commit('setTotalCount', res.data.totalCount);
      } catch (err) {
        console.log(err);
      }
    }
  }
};

export { system };
