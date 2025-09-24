import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './ParentComponent.jsx'
import ParentComponent from './ParentComponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ParentComponent />
  </StrictMode>,
)
