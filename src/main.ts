import { createApp } from 'vue'
import './style.scss'
import App from './App.vue';
import vTooltip from './directives/v-tooltip';
import FontAwesomeIcon from './plugins/icons'

const app = createApp(App)
app
    .component('font-awesome-icon', FontAwesomeIcon)
    .directive('tooltip', vTooltip)
    .mount('#app')
