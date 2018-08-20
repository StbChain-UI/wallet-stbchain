import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css' // 加载样式
import 'muse-ui-loading/dist/muse-ui-loading.css' // load css
import Loading from 'muse-ui-loading';
import Toast from 'muse-ui-toast'

Vue.config.productionTip = false
Vue.use(MuseUI)
Vue.use(Loading)
Vue.use(Toast)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
