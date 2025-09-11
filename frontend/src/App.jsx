import { useState } from 'react'
import { Link, Outlet } from "react-router-dom";
import PWABadge from './PWABadge.jsx' // need to analyse dont remove
import './App.css'
import Documentation from './pages/Documentation.jsx';
import Home from './pages/Home.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
      {/* <Outlet /> */}
      <PWABadge />
    </>
  )
}

export default App
