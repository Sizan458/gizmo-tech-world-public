import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './components/Router/Router'
import Auth from './components/providers/AuthProvider/Auth'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth>
    <RouterProvider router={Router}></RouterProvider>
    </Auth>
  </React.StrictMode>,
)
