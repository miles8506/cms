// vuex
import { createStore, Store, useStore as useVuexStore } from 'vuex';

// type
import { IrootStore, IrootStoreMain } from './type';

// module
import { loginModule } from './login/login';
import { system } from './main/system/system';

const store = createStore<IrootStore>({
  state() {
    return {
      offset: 0,
      size: 10
    };
  },
  mutations: {
    setOffset(state, payload: any) {
      state.offset = payload;
    },
    setSize(state, payload: any) {
      state.size = payload;
    }
  },
  getters: {},
  actions: {},
  modules: {
    loginModule,
    system
  }
});

export function setupUserInfoFn() {
  store.dispatch('loginModule/setupUserInfo');
}

export function useStore(): Store<IrootStoreMain> {
  return useVuexStore();
}

export default store;
