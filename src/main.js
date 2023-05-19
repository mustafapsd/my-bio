import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from 'vue'
import * as VueRouter from 'vue-router'
import About from './components/about/About.vue'
import Resume from './components/resume/Resume.vue'
import AppVue from "./App.vue"

const routes = [
    { path: '/', component: About },
    { path: '/resume', component: Resume },
]

const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
})

const app = createApp(AppVue)
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)

app.mount('#app')
