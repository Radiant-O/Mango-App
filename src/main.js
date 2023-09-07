import { createApp } from 'vue'
// import { createPinia } from 'pinia'

import Antd from 'ant-design-vue';
import App from './App.vue';
import router from './router';
import Axios from 'axios';
import store from './stores/auth.js'

//styles
import './assets/main.css';
import 'ant-design-vue/dist/reset.css';


const app = createApp(App);
// const store = useStore();

// set auth header
Axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.token}`;

app.use(store);
// app.use(createPinia());
app.use(router);
app.use(Antd);

app.mount('#app');
