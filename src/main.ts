import {createApp} from 'vue'
import './assets/index.css'
import App from './App.vue'
import VueGtag from "vue-gtag-next";

const app = createApp(App)
app.use(VueGtag, {
    property: {
        id: "G-YDCC5KLTCZ",
        params: {
            send_page_view: true,
            linker: {
                domain: ['www.unino.tech']
            }
        }
    }
});

app.mount('#app')
