import Vue from 'vue';
import App from './App.vue';
import { router } from './routes/index.js';
import { store } from './store/index.js';

import Chart from './plugins/ChartPlugin.js';

Vue.config.productionTip = false

Vue.use(Chart);

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
