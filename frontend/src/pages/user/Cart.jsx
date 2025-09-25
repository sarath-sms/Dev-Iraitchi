import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import Address from '../../components/Address'
import Collapse from '../../components/Collapse'
import { IraiContextContainer } from '../../context/Context';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import CartList from '../../components/CartList';
import TimeSlots from '../../components/TimeSlots';
import PaymentSplit from '../../components/PaymentSplit';

export default function Cart() {
  const {userData, cartDetails, setPopup, iraiData, setIraiData} = useContext(IraiContextContainer);
  // console.log(iraiData, "iraiData")
  const navigate = useNavigate()
  const [totalAmount, setTotalAmount] = useState(500)
  
  // TODO: create table data for splitup fee on useState
  useEffect(() => {
    !iraiData.length && navigate('/products')
  }, [iraiData])

  function handlePayButton() {
    console.log({cartDetails, iraiData, userData})
    const currentHour = new Date().getHours()
    let getHr = cartDetails?.deliverBetween?.split(',')?.map(db => Number(db)) || [];
    let checkTime = getHr?.includes(currentHour)
  }

  return (
    <CartStyle className='mainContainer'>
      <section className="iraiScreen">
        <Address />
        <div className="secCart">
          {/* need to do TODO : api to update unit price because local storage cart will display here. so, price may varry */}
          <Collapse label="Cart List" comp={<CartList />} isOpen={false} />
        </div>
        <div className="secCart">
          {/* need to do TODO : api to update unit price because local storage cart will display here. so, price may varry */}
          <Collapse label="Delivery Slots" comp={<TimeSlots />} />
        </div>
        <div className="secCart">
          <Collapse label="Payment Split-up" comp={<PaymentSplit />} />
        </div>
      </section>
      <footer>
        <Button label={`PAY ₹${totalAmount}`} onClick={handlePayButton} />
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