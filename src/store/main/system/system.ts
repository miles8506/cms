// service
import {
  requestSystemPage,
  deleteTableItem,
  createPageItem,
  editPageItem
} from '@/service/main/system/system';

//type
import { Module } from 'vuex';
import type { IsystemType } from './type';
import type { IrootStore } from '../../type';

const system: Module<IsystemType, IrootStore> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0
    };
  },

  mutations: {
    setUsersList(state, payload: any[]) {
      state.usersList = payload;
    },
    setUsersCount(state, payload: number) {
      state.usersCount = payload;
    },
    setRoleList(state, payload: any[]) {
      state.roleList = payload;
    },
    setRoleCount(state, payload: number) {
      state.roleCount = payload;
    },
    setGoodsList(state, payload: any[]) {
      state.goodsList = payload;
    },
    setGoodsCount(state, payload: number) {
      state.goodsCount = payload;
    },
    setMenuList(state, payload: any[]) {
      state.menuList = payload;
    },
    setMenuCount(state, payload: number) {
      state.menuCount = payload;
    }
  },

  getters: {
    getDataList(state) {
      return function (pathName: string) {
        return (state as any)[`${pathName}List`];
        // switch (pathName) {
        //   case 'users':
        //     return state.usersList;
        //   case 'role':
        //     return state.roleList;
        // }
      };
    },

    getDataCount(state) {
      return function (pathName: string) {
        return (state as any)[`${pathName}Count`];
      };
    }
  },

  actions: {
    // get list
    async getPageAction({ commit }, payload: any) {
      const pathUrl = `${payload.url}/list`;
      const capitalPathName =
        payload.url.charAt(0).toUpperCase() + payload.url.slice(1);

      try {
        const res = await requestSystemPage({
          url: pathUrl,
          queryInfo: payload.queryInfo
        });
        commit(`set${capitalPathName}List`, res.data.list);
        commit(`set${capitalPathName}Count`, res.data.totalCount);
      } catch (err) {
        console.log(err);
      }
    },

    // delete item
    async deletePageAction({ dispatch, rootState }, payload: any) {
      try {
        const url = `${payload.pathName}/${payload.id} `;
        await deleteTableItem(url);
        dispatch('getPageAction', {
          url: payload.pathName,
          queryInfo: {
            offset: rootState.offset,
            size: rootState.size
          }
          // ...payload.searchData
        });
      } catch (err) {
        console.log(err);
      }
    },

    // create item
    async createPageAction({ dispatch, rootState }, payload: any) {
      try {
        const { pathName, newData } = payload;
        const pageUrl = `/${pathName}`;
        await createPageItem(pageUrl, newData);

        dispatch('getPageAction', {
          url: payload.pathName,
          queryInfo: {
            offset: rootState.offset,
            size: rootState.size
          }
        });
      } catch (err) {
        console.log(err);
      }
    },

    // eidt item
    async editPageAction({ rootState, dispatch }, payload: any) {
      try {
        const { pathName, id, eidtData } = payload;
        const pageUrl = `/${pathName}/${id}`;
        await editPageItem(pageUrl, eidtData);

        dispatch('getPageAction', {
          url: payload.pathName,
          queryInfo: {
            offset: rootState.offset,
            size: rootState.size
          }
        });
      } catch (err) {
        console.log(err);
      }
    }
  }
};

export { system };
