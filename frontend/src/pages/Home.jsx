import React from 'react'
import Documentation from './Documentation'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <>
     {/* <Documentation /> */}
     <div className='iraiContainer'>
      <aside></aside>
      <main>
        <Nav />
        <Outlet />
      </main>
     </div>
    </>
  )
}
