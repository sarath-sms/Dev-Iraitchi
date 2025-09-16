import React from 'react'
import styled from 'styled-components'

export default function Products() {
  return (
    <Style className='mainContainer'>
        <section className="iraiScreen">
            products
        </section>
        <footer>
          
        </footer>
    </Style>
  )
}

const Style = styled.div`
  .iraiScreen {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`