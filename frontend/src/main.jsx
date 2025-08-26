import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx';
import { registerSW } from "virtual:pwa-register";

registerSW({ immediate: true });

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // layout component
    children: [
      { index: true, element: <Home /> },  // default route
      // { path: "about", element: <About /> },
      // { path: "contact", element: <Contact /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
