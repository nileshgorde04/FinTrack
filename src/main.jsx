// Entry point of the React application.
// Renders the root <App /> component inside the HTML element with id="root".
// Wrapped in <StrictMode> to highlight potential issues and ensure best React practices.
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'   
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
