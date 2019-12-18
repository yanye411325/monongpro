// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
var Axios = require( 'axios')
import MintUi from 'mint-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'
//! 解决移动端点击延迟300ms
import fastclick from 'fastclick'
//! 结合postcss-pxtorem和rem.js解决移动端布局适配
import './config/rem'

import 'mint-ui/lib/style.css'
import 'swiper/dist/css/swiper.css'
import './assets/css/common.css'
//! 解决移动端1像素边框hack
import './assets/css/border.css'

Vue.prototype.$Axios = Axios;
fastclick.attach(document.body)
// 配置公共loading
Axios.interceptors.request.use(function (config) {
  MintUi.Indicator.open({
    text: '加载中...',
    spinnerType: 'fading-circle'
  });
  return config;
});
Axios.interceptors.response.use(function (response) {
MintUi.Indicator.close();
return response;
},function(err){
MintUi.Indicator.close();
if (err && err.response) {
  switch (err.response.status) {
    case 400:
      MintUi.Toast({
        message: '请求错误',
        position: 'middle',
        duration: 1000
      });
      break
    case 401:
      MintUi.Toast({
        message: '未授权，请登录',
        position: 'middle',
        duration: 1000
      });
      break
    case 403:
      MintUi.Toast({
        message: '拒绝访问',
        position: 'middle',
        duration: 1000
      });
      break
    case 404:
      MintUi.Toast({
        message: `请求地址出错: ${err.response.config.url}`,
        position: 'middle',
        duration: 1000
      });
      break
    case 408:
      MintUi.Toast({
        message: `请求超时`,
        position: 'middle',
        duration: 1000
      });
      break
    case 500:
      MintUi.Toast({
        message: `服务器内部错误`,
        position: 'middle',
        duration: 1000
      });
      break
    case 501:
      MintUi.Toast({
        message: `服务未实现`,
        position: 'middle',
        duration: 1000
      });
      break
    case 502:
      MintUi.Toast({
        message: `网关错误`,
        position: 'middle',
        duration: 1000
      });
      break
    case 503:
      MintUi.Toast({
        message: `服务不可用`,
        position: 'middle',
        duration: 1000
      });
      break
    case 504:
      MintUi.Toast({
        message: `网关超时`,
        position: 'middle',
        duration: 1000
      });
      break
    case 505:
      MintUi.Toast({
        message: `HTTP版本不受支持`,
        position: 'middle',
        duration: 1000
      });
      break
    default:
  }
}
return Promise.reject(err)
});
Vue.config.productionTip = false

Vue.use(MintUi);
Vue.use(VueAwesomeSwiper);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
