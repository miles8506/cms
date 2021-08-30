// vuex
import { createStore, Store, useStore as useVuxStore } from 'vuex';

// type
import { IrootStore, IrootStoreMain } from './type';

// module
import { loginModule } from './login/login';

const store = createStore<IrootStore>({
  state() {
    return {};
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: { loginModule }
});

export function setupUserInfoFn() {
  store.dispatch('loginModule/setupUserInfo');
}

export function useStore(): Store<IrootStoreMain> {
  return useVuxStore();
}

export default store;
