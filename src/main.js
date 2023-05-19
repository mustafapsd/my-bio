import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from 'vue'
import * as VueRouter from 'vue-router'
import AppVue from "./App.vue"
import About from './components/about/About.vue'
import Resume from './components/resume/Resume.vue'
import Homeland from './components/homeland/Homeland.vue'
import Mevlana from './components/mevlana/Mevlana.vue'

const routes = [
    { path: '/', component: About },
    { path: '/resume', component: Resume },
    { path: '/homeland', component: Homeland },
    { path: '/mevlana', component: Mevlana },
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
