import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'

// Usado solo en el build (prerender.js) para generar el HTML inicial de la página.
export function render() {
  return renderToString(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}
