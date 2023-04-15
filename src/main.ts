import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { setupStore } from "@/store"
const app = createApp(App)
app.use(router)

setupStore(app)

app.mount('#app')
