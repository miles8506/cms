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
  actions: {
    async getPageAction({ commit }, payload: any) {
      try {
        const pathName = payload.pathName;
        let pathUrl = '';

        switch (pathName) {
          case 'users':
            pathUrl = '/users/list';
            break;
          case 'role':
            pathUrl = '/role/list';
            break;
        }

        const res = await requestSystemPage({
          url: pathUrl,
          data: payload.queryInfo
        });

        const capitalPath =
          pathName.charAt(0).toUpperCase() + pathName.slice(1);

        commit(`set${capitalPath}List`, res.data.list);
        commit(`set${capitalPath}Count`, res.data.totalCount);
      } catch (err) {
        console.log(err);
      }
    }
  },
  getters: {
    getUrlName(state) {
      return function (pathName: string) {
        switch (pathName) {
          case 'users':
            return state.usersList;
          case 'role':
            return state.roleList;
        }
      };
    }
  }
};

export { system };
