import { createApp } from 'vue'
import './style.scss'
import App from './App.vue';
import vTooltip from './directives/v-tooltip';
import vClickOutside from './directives/v-click-outside';

const app = createApp(App)
app
    .directive('tooltip', vTooltip)
    .directive('click-outside', vClickOutside)
    .mount('#app')
