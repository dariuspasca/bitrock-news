import '@/assets/main.css'

import { createApp, provide, h } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'
import { DefaultApolloClient } from '@vue/apollo-composable'
import apolloClient from '@/libs/apollo-provider'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App)
})

app.use(pinia)
app.use(router)

app.mount('#app')
