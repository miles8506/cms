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
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0
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
    }
  },

  actions: {
    async getPageAction({ commit }, payload: any) {
      const pathUrl = `${payload.url}/list`;
      // switch (payload.url) {
      //   case 'users':
      //     pathUrl = '/users/list';
      //     break;
      //   case 'role':
      //     pathUrl = '/role/list';
      //     break;
      // }

      // 將首字母轉為大寫
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
    }
  }
};

export { system };
