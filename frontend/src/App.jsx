import { useState } from 'react'
import { Link, Outlet } from "react-router-dom";
import PWABadge from './PWABadge.jsx' // need to analyse dont remove
import './App.css'
import Documentation from './pages/Documentation.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Outlet />
      <PWABadge />
    </>
  )
}

export default App
