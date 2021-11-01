import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin
  
} from "@fortawesome/free-brands-svg-icons";
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import VueScrollTo from 'vue-scrollto';

library.add(faFacebook, faGithub, faInstagram, faLinkedin, faArrowDown);
Vue.component("font-awesome-icon", FontAwesomeIcon);



Vue.use(VueScrollTo)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
