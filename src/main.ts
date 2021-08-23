// base vue
import App from './App.vue';
import { createApp } from 'vue';
import { router } from './router/index';
import store from './store/index';

// css
import 'normalize.css';
import '@/assets/less/base/base.less';

// else
import { registerGlobalApp } from './global';
import './service';
import { ApiRequest } from './service';

const app = createApp(App);
app.use(router);
app.use(store);

// register element-plus/
app.use(registerGlobalApp);
app.mount('#app');

interface dataType {
  data: any;
  returnCode: string;
  success: boolean;
}

ApiRequest.request<dataType>({
  url: '/home/multidata',
  method: 'GET',
  showLoadingStatus: false
}).then((res) => {
  return res;
});
