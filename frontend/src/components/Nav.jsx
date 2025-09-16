import React from 'react'
import IRAITCHI from '../assets/logo.svg'
import styled from 'styled-components'

export default function Nav() {
  return (
    <Style>
        <img src={IRAITCHI} alt="iraitchi logo" />
    </Style>
  )
}

const Style = styled.nav({
    padding: '12px 14px 11px',
    // boxShadow: 'rgb(0 0 0 / 35%) 0px 8px 24px',
    img: {
        height: '44px'
    }
})
