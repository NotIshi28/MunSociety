import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navigate } from 'react-router-dom'
import App from './App.jsx'
import Team from  './Team.jsx'
import Amigmun from './Amigmun.jsx'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/home",
    element: <Navigate to='/' />,
  },
  {
    path:"/AMIGMUN'24",
    element: <Navigate to='/amigmun' />
  },
  {
    path: "/about",
    element: <h1>About</h1>,
  },
  {
    path: "/team",
    element: <Team/>,
  },
  {
    path:"/amigmun",
    element: <Amigmun/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
