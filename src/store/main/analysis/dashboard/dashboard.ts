import type { Module } from 'vuex';
import type { IdashboardState } from './type';
import type { IrootStore } from '../../../type';

// api
import {
  GoodsCountApi,
  GoodsSaleApi,
  GoodsFavorApi,
  AddressGoodsApi
} from '@/service/main/analysis/dashboard';

const dashboardModule: Module<IdashboardState, IrootStore> = {
  namespaced: true,
  state() {
    return {
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryGoodsFavor: [],
      addressGoodsSale: []
    };
  },
  mutations: {
    setGoodsCount(state, res) {
      state.categoryGoodsCount = res.data;
    },
    setGoodsSale(state, res) {
      state.categoryGoodsSale = res.data;
    },
    setGoodsFavor(state, res) {
      state.categoryGoodsFavor = res.data;
    },
    setAddressGoodsSale(state, res) {
      state.addressGoodsSale = res.data;
    }
  },
  actions: {
    async getDashboardData({ commit }) {
      try {
        const goodsCountResult = await GoodsCountApi();
        commit('setGoodsCount', goodsCountResult);

        const goodsSaleResult = await GoodsSaleApi();
        commit('setGoodsSale', goodsSaleResult);

        const goodsFavorResult = await GoodsFavorApi();
        commit('setGoodsFavor', goodsFavorResult);

        const addressGoodsSaleResult = await AddressGoodsApi();
        commit('setAddressGoodsSale', addressGoodsSaleResult);
      } catch (err) {
        console.log(err);
      }
    }
  }
};

export { dashboardModule };
