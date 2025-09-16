import React from 'react'
import Documentation from './Documentation'
import { Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <>
     {/* <Documentation /> */}
            <Outlet />
    </>
  )
}
