import React from 'react'
import styled from 'styled-components'
import Button from './Button'

export default function PincodeChecker() {
  return (
    <Style>
        <Button className="tiny checkAvailability" label={<>Enter Pincode to check <b>Availability</b></>} />
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
