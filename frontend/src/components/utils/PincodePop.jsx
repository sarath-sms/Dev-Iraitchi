import React, { useContext } from 'react'
import styled from 'styled-components'
import Textbox from '../Textbox';
import Button from '../Button';
import { IraiContextContainer } from '../../context/Context';

export default function PincodePop() {

    const {setPopup, userData: {pincode}, setUserData} = useContext(IraiContextContainer);
    
    function checkAvailability() {
        // need to do TODO
        setPopup({open: false})
    }
    function enteredPincode(e) {
        setUserData(prev => ({...prev, pincode: e.target.value}))
    }
  return (
    <PincodePopStyle>
        <p>We will check if we can serve you based on your area's pincode, as our service is only available in specific regions.</p>
        <Textbox value={pincode} onChange={enteredPincode} inputmode='numeric' placeholder='Enter Your Area Pincode' />
        <Button label='Check Availability' onClick={checkAvailability} />
    </PincodePopStyle>
  )
}

const PincodePopStyle = styled.div`
    input[type='text'] {
        font-weight: 700;
        text-align: center;
        margin-bottom: 2rem;
    }
    p {
        text-align: center;
        margin-bottom: 2rem;
        line-height: 1.5rem;
    }
`
