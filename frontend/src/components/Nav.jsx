import React from 'react'
import IRAITCHI from '../assets/iraiLogoTransparent.svg'
import styled from 'styled-components'

export default function Nav() {
  return (
    <Style>
        <img src={IRAITCHI} alt="iraitchi logo" />
    </Style>
  )
}

const Style = styled.nav({
    background: '#FFEB3B',
    padding: '12px',
    textAlign: 'center',
    boxShadow: 'rgb(255 235 59 / 35%) 0px 8px 24px',
    img: {
        height: '54px'
    }
})
