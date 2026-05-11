import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ParallaxProvider } from 'react-scroll-parallax'
import { I18nProvider } from './i18n/index.tsx'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nProvider>
      <ParallaxProvider>
        <App />
      </ParallaxProvider>
    </I18nProvider>
  </StrictMode>,
)
