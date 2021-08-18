import App from './App.vue';
import { createApp } from 'vue';
import { router } from './router/index';
import store from './store/index';
import { registerGlobalApp } from './global';
import './service';
import { ApiRequest } from './service';

const app = createApp(App);
app.use(router);
app.use(store);

// register element-plus/
app.use(registerGlobalApp);
app.mount('#app');
ApiRequest.request({
  url: '/home/multidata',
  method: 'GET'
});
