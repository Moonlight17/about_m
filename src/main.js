import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'



import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faBars, faFacebook, faGithub, faInstagram, faLinkedin);
Vue.component("font-awesome-icon", FontAwesomeIcon);




Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
