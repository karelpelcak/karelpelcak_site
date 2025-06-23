import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n, { getLanguage } from './i18n'
import '@/assets/css/globals.css'

const app = createApp(App)

getLanguage()

app.use(router)

//setup i18n to app
app.use(i18n)

app.mount('#app')
