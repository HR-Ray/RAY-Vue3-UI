import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'

import HomePage from "./components/HomePage.vue";
import SwitchPage from "./components/SwitchPage.vue";

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: HomePage },
        { path: '/switch', component: SwitchPage },
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
