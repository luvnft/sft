import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import MainRoutes from './routes.jsx'
import { Provider } from 'react-redux'
import ReduxStore from './ReduxStore.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ReduxStore}>
      <RouterProvider router={MainRoutes} />
    </Provider>
  </React.StrictMode>,
)
