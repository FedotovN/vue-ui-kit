import { Component, createApp } from 'vue'
import './style.scss'
import App from './App.vue';
import plugin from './plugin';
const app = createApp(App as unknown as Component);
app.use(plugin);
app.mount('#app')
