import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { Quasar } from 'quasar';
import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass';
import '../css/app.css';
import App from './App.vue';

const app = createApp(App);

app.use(createPinia());
app.use(Quasar, {
    plugins: {},
    config: {
        brand: {
            primary: '#800018',
            dark: '#171717',
        },
    },
});

app.mount('#app');
