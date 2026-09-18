import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'
import FavoritesProvider from "./context/FavoritesProvider";
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
<StrictMode>
  <FavoritesProvider>
    <App />
  </FavoritesProvider>
</StrictMode>
)
