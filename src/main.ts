// base vue
import App from './App.vue';
import { createApp } from 'vue';
import { router } from './router/index';
import store from './store/index';
import { setupUserInfoFn } from './store/';

// css
import 'normalize.css';
import '@/assets/less/base/base.less';

// else
import { registerGlobalApp } from './global';
import './service';

const app = createApp(App);
app.use(store);
// register element-plus/
app.use(registerGlobalApp);
app.use(setupUserInfoFn);
app.use(router);

app.mount('#app');
