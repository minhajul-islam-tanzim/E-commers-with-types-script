import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Root from './components/layout/Root.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root></Root>
  </StrictMode>,
)
