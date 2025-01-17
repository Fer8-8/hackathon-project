import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './normalize.css'
import {GlobalRoutes} from './GlobalRoutes'
import {AppTheme} from './theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppTheme>
        <GlobalRoutes />
      </AppTheme>
    </BrowserRouter>
  </React.StrictMode>
)
