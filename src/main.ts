import '@/assets/main.scss'

import {createApp} from 'vue'
import {createPinia} from 'pinia'
import directivesPlugin from '@/plugins/directives';
import i18n from '@/plugins/i18n'
// import App from './App.vue'
import DemoI18n from "@/DemoI18n.vue";
import router from './router'

const app = createApp(DemoI18n)

app.use(createPinia())
app.use(router)
app.use(directivesPlugin);
app.use(i18n, {
    greetings: {
        hi: 'Привіт!'
    }
});

app.mount('#app')
