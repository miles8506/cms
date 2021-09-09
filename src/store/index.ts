// vuex
import { createStore, Store, useStore as useVuexStore } from 'vuex';

// type
import { IrootStore, IrootStoreMain } from './type';

// module
import { loginModule } from './login/login';
import { system } from './main/system/system';

const store = createStore<IrootStore>({
  state() {
    return {};
  },
  mutations: {},
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
