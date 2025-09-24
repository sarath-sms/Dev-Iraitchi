import React, { useContext } from 'react'
import styled from 'styled-components'
import { IraiContextContainer } from '../context/Context';
import CartProduct from './CartProduct';

export default function CartList() {
      const {userData: {pincode}, setPopup, iraiData, setIraiData} = useContext(IraiContextContainer);
    console.log(iraiData)


  return (
    <CartListStyle>
        {iraiData.map((node, i) => <CartProduct product={node} key={`prod_${i}`} />)}
    </CartListStyle>
  )
}

const CartListStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
`
