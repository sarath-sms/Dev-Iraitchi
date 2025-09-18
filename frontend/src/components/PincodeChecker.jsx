import React, { useContext } from 'react'
import styled from 'styled-components'
import Button from './Button'
import { IraiContextContainer } from '../context/Context';

export default function PincodeChecker() {
  const {setPopup} = useContext(IraiContextContainer);
  function handlePincodeCheck() {
    setPopup(prev => ({open: true, content: <h1>working fine</h1>}))
  }
  return (
    <Style>
        <Button className="tiny checkAvailability" onClick={handlePincodeCheck} label={<>Enter Pincode to check <b>Availability</b></>} />
    </Style>
  )
}

const Style = styled.div`
position: absolute;
top: 22px;
right: 16px;
width: 250px;
    .checkAvailability {
        font-weight: 400;
    }
`
