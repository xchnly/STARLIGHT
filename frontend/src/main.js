import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import VxeUIAll from 'vxe-pc-ui'
import 'vxe-pc-ui/lib/style.css'
import VxeUITable from 'vxe-table'
import 'vxe-table/lib/style.css'

import './style.css'

const app = createApp(App)

app.use(router)
app.use(VxeUIAll)
app.use(VxeUITable)

app.mount('#app')
