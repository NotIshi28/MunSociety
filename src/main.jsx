import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navigate } from 'react-router-dom'
import App from './App.jsx'
import Team from  './Team.jsx'
import Amigmun from './Amigmun.jsx'
import Amigmun2025 from './Amigmun2025.jsx'
import Achievements from './Achievements.jsx'
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
    path: "/about",
    element: <h1>About</h1>,
  },
  {
    path: "/team",
    element: <Team/>,
  },
  {
    path: "/amigmun",
    element: <Amigmun/>
  },
  {
    path: "/amigmun/2025",
    element: <Amigmun2025/>
  },
  {
    path: "/achievements",
    element: <Achievements />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
