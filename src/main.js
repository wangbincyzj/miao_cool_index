import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {mixins} from "@/utils/mixins";
import("@/assets/css/main.scss")

Vue.config.productionTip = false

Vue.mixin(mixins.routerMixin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
