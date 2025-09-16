import { useEffect, useState } from 'react'
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import PWABadge from './PWABadge.jsx' // need to analyse dont remove
import './App.css'
import Documentation from './pages/Documentation.jsx';
import Nav from './components/Nav.jsx';

function App() {

  return (
    <>
      <div className='iraiContainer'>
        <aside></aside>
        <main>
          <Nav />
          <Outlet />
        </main>
      </div>
        <PWABadge />
    </>
  )
}

export default App
