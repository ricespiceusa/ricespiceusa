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
          primary: '#1e3a8a',
          secondary: '#3b82f6',
          accent: '#60a5fa',
          success: '#16a34a',
          info: '#0ea5e9',
          warning: '#f59e0b',
          error: '#dc2626',
          background: '#f8fafc',
          surface: '#ffffff',
          'on-primary': '#ffffff',
          'on-secondary': '#ffffff',
          'on-accent': '#000000',
          'on-background': '#1e293b',
          'on-surface': '#1e293b'
        }
      }
    }
  }
})

export default vuetify 