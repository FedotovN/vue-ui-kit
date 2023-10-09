import { createApp } from 'vue'
import './style.scss'
import App from './App.vue';
import vTooltip from './directives/v-tooltip';
import vClickOutside from './directives/v-click-outside';
import FontAwesomeIcon from './plugins/icons'

const app = createApp(App)
app
    .component('font-awesome-icon', FontAwesomeIcon)
    .directive('tooltip', vTooltip)
    .directive('click-outside', vClickOutside)
    .mount('#app')
