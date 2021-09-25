// vuex
import { createStore, Store, useStore as useVuexStore } from 'vuex';

// type
import { IrootStore, IrootStoreMain } from './type';

// module
import { loginModule } from './login/login';
import { system } from './main/system/system';

// api
import { requestSystemPage } from '@/service/main/system/system';

const store = createStore<IrootStore>({
  state() {
    return {
      offset: 0,
      size: 10,
      entireDepartment: [],
      entireRole: []
    };
  },
  mutations: {
    setOffset(state, payload: any) {
      state.offset = payload;
    },
    setSize(state, payload: any) {
      state.size = payload;
    },
    setEntireDepartment(state, departmentList: any[]) {
      state.entireDepartment = departmentList;
    },
    setEntireRole(state, roleList: any[]) {
      state.entireRole = roleList;
    }
  },
  getters: {},
  actions: {
    async initialDataAciton({ commit }) {
      try {
        // department
        const departmentRes = await requestSystemPage({
          url: '/department/list',
          data: {
            offset: 0,
            size: 1000
          }
        });
        const { list: departmentList } = departmentRes.data;

        // role
        const roleRes = await requestSystemPage({
          url: '/role/list',
          data: {
            offset: 0,
            size: 1000
          }
        });
        const { list: roleList } = roleRes.data;

        // commit
        commit('setEntireDepartment', departmentList);
        commit('setEntireRole', roleList);
      } catch (err) {
        console.log(err);
      }
    }
  },
  modules: {
    loginModule,
    system
  }
});

export function setupUserInfoFn() {
  store.dispatch('loginModule/setupUserInfo');
  store.dispatch('initialDataAciton');
}

export function useStore(): Store<IrootStoreMain> {
  return useVuexStore();
}

export default store;
