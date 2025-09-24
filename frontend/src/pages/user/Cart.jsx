import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import Address from '../../components/Address'
import Collapse from '../../components/Collapse'
import { IraiContextContainer } from '../../context/Context';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import CartList from '../../components/CartList';

export default function Cart() {
  const {userData: {pincode}, setPopup, iraiData, setIraiData} = useContext(IraiContextContainer);
  // console.log(iraiData, "iraiData")
  const navigate = useNavigate()
  const [totalAmount, setTotalAmount] = useState(500)
  
  useEffect(() => {
    !iraiData.length && navigate('/products')
  }, [iraiData])
  
  return (
    <CartStyle className='mainContainer'>
      <section className="iraiScreen">
        <Address />
        <div className="cartList">
          <Collapse label="Cart List" comp={<CartList />} />
        </div>
      </section>
      <footer>
        <Button label={`PAY ₹${totalAmount}`} />
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