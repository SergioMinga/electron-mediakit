import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AOS from 'aos'
import 'aos/dist/aos.css' 
import Vuetify from 'vuetify'
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'

Vue.use(Vuetify) 
Vue.use(VueVideoPlayer, /* {
  options: global default options,
  events: global videojs events
} */)
import 'vuetify/dist/vuetify.min.css'


Vue.config.productionTip = false
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// app.js
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
new Vue({
  created() {
    AOS.init();
  },
  vuetify: new Vuetify(),
  router,
  store,
  render: h => h(App)
}).$mount('#app')
