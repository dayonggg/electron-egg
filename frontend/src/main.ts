import { createApp } from 'vue'
import App from './App.vue'

// ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import ClickOutside from 'element-plus/es/directives/click-outside/index'

// Style
import '@/assets/global.scss'

// Fonts
import { AppFonts } from '@/utils/AppFonts'

const app = createApp(App)

app.directive('click-outside', ClickOutside)

app.use(ElementPlus, { size: 'small' })

AppFonts.getInstance()
  .initialize()
  .then(() => {
    app.mount('#app').$nextTick(() => {
      const loadingElement = document.getElementById('loadingPage')
      if (loadingElement) {
        ;(loadingElement as HTMLElement).remove()
      }
    })
  })
