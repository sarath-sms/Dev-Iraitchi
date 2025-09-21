import React, { useContext } from 'react'
import styled from 'styled-components'
import Button from './Button'
import { IraiContextContainer } from '../context/Context';
import editIcon from '../assets/icons/editGreen.svg'
import PincodePop from './utils/PincodePop';

export default function PincodeChecker() {
  const {setPopup, userData: {pincode}} = useContext(IraiContextContainer);


  function handlePincodeCheck() {
    setPopup(prev => ({open: true, content: <PincodePop />}))
  }

  return (
    <Style>
        {!!pincode ? <p onClick={handlePincodeCheck}>Pincode: {pincode} <img src={editIcon} alt="edit" /></p> :
        <Button className="tiny checkAvailability" onClick={handlePincodeCheck} label={<>Enter Pincode to check <b>Availability</b></>} />}
    </Style>
  )
}

const Style = styled.div`
position: absolute;
top: 22px;
right: 16px;
cursor: pointer;
/* width: 250px; */
p {
  color: var(--success);
}
img {
  transition: 0.4s rotate;
}
    .checkAvailability {
        font-weight: 400;
    }
    &:hover {
      img {
        rotate: 360deg;
      }
    }
`
