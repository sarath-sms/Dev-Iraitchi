import { useEffect, useState } from 'react'
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import PWABadge from './PWABadge.jsx' // need to analyse dont remove
import './App.css'
import Documentation from './pages/Documentation.jsx';
import Nav from './components/Nav.jsx';
import Popup from './components/Popup.jsx';
import styled from 'styled-components';

export default function App() {

  return (
    <>
      <MainStyle className='iraiContainer'>
        <aside></aside>
        <main>
          <Popup />
          <Nav />
          <Outlet />
        </main>
      </MainStyle>
        <PWABadge />
    </>
  )
}

const MainStyle = styled.div`
`

