import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AOSProvider } from './components/context/AOSProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AOSProvider>

    <App />
  </AOSProvider>
  </React.StrictMode>,
)
