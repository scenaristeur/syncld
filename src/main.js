import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import ystore from './y_store'
import store from './store'
import FusionLd from '@/plugins/FusionLd'

import BootstrapVue3 from "bootstrap-vue-3";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

createApp(App)
// .use(y_store)
.use(store)
.use(router)
.use(FusionLd, {
    ystore
    /* optional options */
  })
.use(BootstrapVue3)
.mount('#app')
