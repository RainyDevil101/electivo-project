import { createPinia } from 'pinia';
import { createApp } from 'vue';
import { prefersColorTheme } from './helpers';
import router from './router';
import App from './App.vue';
import './style.css';
import 'animate.css';

prefersColorTheme();

createApp(App)
    .use(createPinia())
    .use(router)
    .mount('#app');