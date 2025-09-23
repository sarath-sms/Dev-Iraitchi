import React, { useEffect } from 'react'
import Documentation from './Documentation'
import { Outlet, useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate();
  navigate('/login')
  // useEffect(() => navigate('/login'), [])
  return (
    <>
      {/* <Documentation /> */}
      {/* <Outlet /> */}
    </>
  )
}
