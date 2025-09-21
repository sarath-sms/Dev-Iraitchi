import React from 'react'
import styled from 'styled-components'
import Address from '../../components/Address'
import Collapse from '../../components/Collapse'

export default function Cart() {
  return (
    <CartStyle className='mainContainer'>
      <section className="iraiScreen">
        <Address />
        <div className="cartList">
          <Collapse label="Cart List" comp={<>cart list</>} />
        </div>
      </section>
      <footer>
      </footer>
    </CartStyle>
  )
}

const CartStyle = styled.div`
  .iraiScreen {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
`