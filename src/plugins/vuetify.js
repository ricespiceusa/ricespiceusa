import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#FF6B35',
          secondary: '#F7931E',
          accent: '#FFD23F',
          success: '#4CAF50',
          info: '#2196F3',
          warning: '#FF9800',
          error: '#F44336',
          background: '#FAFAFA',
          surface: '#FFFFFF',
          'on-primary': '#FFFFFF',
          'on-secondary': '#FFFFFF',
          'on-accent': '#000000',
          'on-background': '#212121',
          'on-surface': '#212121'
        }
      }
    }
  }
})

export default vuetify 