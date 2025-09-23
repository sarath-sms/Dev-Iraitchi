import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import Textbox from '../Textbox';
import Button from '../Button';
import { IraiContextContainer } from '../../context/Context';
import { useNavigate } from 'react-router-dom';
import { testRegex } from '../../pages/utils/commonFunctions';

export default function PincodePop({path = ''}) {

    const navigate = useNavigate();
    const {setPopup, userData: {pincode}, setUserData} = useContext(IraiContextContainer);
    const [pinc, setPinc] = useState('');
    const [disableBtn, setDisableBtn] = useState(true)

    useEffect(() => {
        handleDisableBtn(pincode)
        !!pincode && setPinc(pincode)
    }, [])

    function handleDisableBtn(str) {
        if(str?.length === 6) {
            setDisableBtn(false);
        } else {
            setDisableBtn(true);
        }
    }

    function checkAvailability() {
        // need to do TODO
        // check otp here...!
        let eligiblePincode = [600125, 600116, 600122];
        if(eligiblePincode.includes(Number(pinc))) {
            setUserData(prev => ({...prev, pincode: pinc}));
        } else {
            navigate('/apologise');
        }
        setPopup({open: false});
        !!path && navigate(path);
    }

    function enteredPincode(e) {
        if(testRegex(/^\d+$/, e.target.value) || e.target.value === '') {
            setPinc(e.target.value);
            handleDisableBtn(e.target.value)
        }
    }

  return (
    <PincodePopStyle>
        <p>We will check if we can serve you based on your area's pincode, as our service is only available in specific regions.</p>
        <Textbox value={pinc} type="text" onChange={enteredPincode} inputmode='numeric' placeholder='Enter Your Area Pincode' maxLength='6' />
        <Button label='Check Availability' disable={disableBtn} onClick={checkAvailability} />
    </PincodePopStyle>
  )
}

const PincodePopStyle = styled.div`
    input[type='text'], input[type='number'] {
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
