import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx';
import { registerSW } from "virtual:pwa-register";
import IraiContext from './context/Context.jsx';
import UserLogin from './pages/user/UserLogin.jsx';
import Documentation from './pages/Documentation.jsx';
import VerifyOtp from './pages/user/VerifyOtp.jsx';
import Products from './pages/user/Products.jsx';
import Cart from './pages/user/Cart.jsx';
import Feedback from './pages/user/Feedback.jsx';
import Profile from './pages/user/Profile.jsx';
import Apologise from './pages/Apologise.jsx';

registerSW({ immediate: true });

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // layout component
    children: [
      {index: true, element: <Home />},
      { path: "documentation", element: <Documentation /> },
      { path: "login", element: <UserLogin /> },
      { path: "verifyOtp", element: <VerifyOtp /> },
      { path: "products", element: <Products /> },
      { path: "cart", element: <Cart /> },
      { path: "feedback", element: <Feedback /> },
      { path: "profile", element: <Profile /> },
      { path: "apologise", element: <Apologise /> },

      // { path: "products", element: <Products /> },
      // { path: "iraiAdmin", element: <UserLogin /> }
      // { path: "contact", element: <Contact /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <IraiContext>
      <RouterProvider router={router} />
    </IraiContext>
  // </StrictMode>,
)
