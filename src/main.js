import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css' // 加载样式
import 'muse-ui-loading/dist/muse-ui-loading.css' // load css
import theme from 'muse-ui/lib/theme'
import Loading from 'muse-ui-loading'
import Toast from 'muse-ui-toast'

Vue.config.productionTip = false
Vue.use(MuseUI)
Vue.use(Loading)
Vue.use(Toast)

//theme sets

theme.addCreateTheme( (theme) => {
  return `
  .mu-appbar{border-bottom:5px solid black;box-shadow:none;}
  .mu-item{color:#e7e7e7;}
  .mu-item-title .item-name{color:#00a9e0;}
  .mu-item-sub-title{color:#e7e7e7;}
  .mu-badge{background-color:#000;color:#e7e7e7;}
  .mkt .mu-item-wrapper{padding:5px 0;border-bottom:1px #354574 solid;}
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
