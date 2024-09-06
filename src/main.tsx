import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@shopify/polaris/build/esm/styles.css';
import { AppProvider } from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';

createRoot(document.getElementById('root')!).render(
  <AppProvider i18n={enTranslations}>
    <App />
  </AppProvider>,
)
