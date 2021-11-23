import Vue from 'vue';
import request from '@/utils/request';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/css/theme.less';
import '@/assets/css/index.less';
// 引入reset.css
import '@/assets/css/normal.css';
// 引入自动化引入icons/svg文件夹下所有svg的js文件
import '@/assets/icons';

// 配全局属性配置，在任意组件内可以使用this.$qs获取qs对象
// import qs from  'qs'
// Vue.prototype.$qs = qs

Vue.prototype.request = request;
// 引入element
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
