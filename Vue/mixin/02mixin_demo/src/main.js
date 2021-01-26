import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import myPlugin from './myPlugin.js';

createApp.use(myPlugin);

createApp(App).use(store).use(router).mount('#app')
