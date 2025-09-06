import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from "react-router-dom"
import router from "./router"

// Bootstrap CSS

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/index.css'
import './assets/styles/bootstrap.custom.css'
import { Provider } from 'react-redux'
import store from '../redux/store'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
