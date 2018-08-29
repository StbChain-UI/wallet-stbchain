import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css' // 加载样式
import 'muse-ui-loading/dist/muse-ui-loading.css' // load css
import theme from 'muse-ui/lib/theme'
import Loading from 'muse-ui-loading'
import Toast from 'muse-ui-toast'
import bitshares from 'bitsharesjs'
import axios from 'axios'
import qs from 'qs'

Vue.config.productionTip = false
Vue.use(MuseUI)
Vue.use(Loading)
Vue.use(Toast)

//axios 封装
let axiosIns = axios.create({});
if (process.env.NODE_ENV == 'development') {  
  axiosIns.defaults.baseURL = 'https://antv.alipay.com/';  //你的api部分地址例，开发环境
} else if (process.env.NODE_ENV == 'debug') {
  axiosIns.defaults.baseURL = 'https://antv.alipay.com/'; //调试时
} else if (process.env.NODE_ENV == 'production') {
  axiosIns.defaults.baseURL = 'https://antv.alipay.com/';   //你的api部分地址例，生产环境
}

axiosIns.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';
axiosIns.defaults.headers.get['X-Requested-With'] = 'XMLHttpRequest';
axiosIns.defaults.responseType = 'json';
axiosIns.defaults.transformRequest = [function (data) {
  //数据序列化
  return qs.stringify(data);
}
];
axiosIns.defaults.validateStatus = function (status) {
  return true;
};
//配置拦截器AOP
axiosIns.interceptors.request.use(function (config) {
  //配置config
  config.headers.Accept = 'application/json';
  // config.headers.System = 'vue';
  // let token = Vue.localStorage.get('token');
  // if(token){
  //     config.headers.Token = token;
  // }
  return config;
});
axiosIns.interceptors.response.use(function (response) {
  let data = response.data;
  let status = response.status;
  if (status === 200) {
      return Promise.resolve(response);
  } else {
      return Promise.reject(response);
  }
});

let ajaxMethod = ['get', 'post'];
let api = {};

ajaxMethod.forEach((method)=> {

  //循环ajaxMethod数组给api对象添加get,post属性
  api[method] = function (uri, data, config) {
      return new Promise(function (resolve, reject) {
          axiosIns[method](uri, data, config).then((response)=> {
              /*根据后台数据进行处理
               *1 code===200   正常数据+错误数据     code!==200   网络异常等
               *2 code===200   正常数据     code!==200   错误数据+网络异常等
               * 这里使用的是第一种方式
               * ......
               */
              if (response.data.StatusCode) {
                  //toast封装：  参考ele-mint-ui
                  Toast({
                      message: response.data.Message,
                      position: 'top',
                      duration: 2000
                  });
                  if (response.data.Message === '未登录') {
                      Toast({
                          message: response.data.Message,
                          position: '',
                          duration: 2000
                      });
                      //使用vue实例做出对应行为  change state or router
                      //instance.$store.commit('isLoginShow',true);
                      this.$router.push({ path: '/'});
                  }
              } else {
                  resolve(response);
              }
          }).catch((response)=> {
              //reject response
              //alert('xiuxiu，限你10分钟到我面前来,不然...');
          })
      })
  }
});

Vue.prototype.$axios = api;

//theme sets
theme.addCreateTheme( (theme) => {
  return `
  .mu-appbar{border-bottom:5px solid black;box-shadow:none;}
  .mu-item{color:#e7e7e7;}
  .mu-item-title .item-name{color:#00a9e0;}
  .mu-item-sub-title{color:#e7e7e7;}
  .mu-badge{background-color:#000;color:#e7e7e7;}
  .mu-item-wrapper{padding:5px 0;border-bottom:1px #354574 solid;}
  .mu-popover{background-color:#000;}
  .mu-checkbox{color:rgba(0,0,0,.7);}
  
  `;
})

theme.add('like', {
  primary: '#f8b62b',
  secondary: '#000',
  success: '#4caf50',
  warning: '#ffeb3b',
  text: {
    primary: 'rgba(220, 220, 220, 0.87)',
  },
  background:{
    paper: '#262e45',
    default: '#262e45'
  }
}, 'dark');

theme.use('like');


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
