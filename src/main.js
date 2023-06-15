import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import './style.css';

const pinia = createPinia();

const app = createApp(App);

app.use(pinia).mount('#app');

//createApp(App).mount('#app');