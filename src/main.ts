import './assets/main.css'
import 'ant-design-vue/dist/reset.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { DatePicker } from 'ant-design-vue';
import { createPersistedStatePlugin } from 'pinia-plugin-persistedstate-2'


const app = createApp(App)

const pinia = createPinia()

const persistedStatePlugin = createPersistedStatePlugin()
pinia.use(persistedStatePlugin)
app.use(DatePicker);
app.use(pinia)

app.mount('#app')
