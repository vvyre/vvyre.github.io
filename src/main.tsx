import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Router } from './pages/routes.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router />
  </StrictMode>
)
