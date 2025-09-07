import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import "./index.css"
/*PascalCase
camelCase
snake_case
kebab-case*/


//Los nombres de los componentes es  siempre en PascalCase para que sepa diferenciar entre componentes y elementos html


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <App />
)