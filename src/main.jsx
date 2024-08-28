import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import MainRoutes from './routes.jsx'
import { Provider } from 'react-redux'
import ReduxStore, { persistor } from './ReduxStore.jsx'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ReduxStore}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={MainRoutes} />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
