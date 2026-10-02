import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// Иконки
import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTelegram
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowDown,
  faArrowUp,
  faEnvelope,
  faMapMarkerAlt,
  faExternalLinkAlt,
  faCode
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faFacebook, faGithub, faInstagram, faLinkedin, faArrowDown, faArrowUp, faEnvelope, faMapMarkerAlt, faExternalLinkAlt, faCode, faTelegram);

// Хронология
import VueTimeline from "@growthbunker/vuetimeline";
Vue.use(VueTimeline);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')