import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import router from './router'
import { store } from './Store/store'
import * as firebase from 'firebase'



Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
render: h => h(App),
created(){
  firebase.initializeApp( {
    apiKey: "AIzaSyCAOd1VPZcP5v0hBt2PxTZC-yB42et3JQw",
  authDomain: "vue-first-deploy-test.firebaseapp.com",
  databaseURL: "https://vue-first-deploy-test.firebaseio.com",
  projectId: "vue-first-deploy-test",
  storageBucket: "vue-first-deploy-test.appspot.com",
  messagingSenderId: "647897343575",
  appId: "1:647897343575:web:7a786d2de50d57ba526512"
})
this.$store.dispatch('loadMeet')
}
}).$mount('#app')