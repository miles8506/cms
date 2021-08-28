// vuex
import { createStore } from 'vuex';

// type
import { IrootStore } from './type';

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

export default store;
