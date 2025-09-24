import React, { useContext, useEffect, useState } from 'react'
import { IraiContextContainer } from '../context/Context'
import styled from 'styled-components'
import Button from './Button'
import locationIcon from '../assets/icons/currentLocation.svg'
import Collapse from './Collapse'
import Textbox from './Textbox'
import PincodePop from './utils/PincodePop'
import { getLocation } from '../pages/utils/commonFunctions'

export default function Address() {

    const {userData, setUserData, setPopup} = useContext(IraiContextContainer);
    const {pincode, address: {homeId, addr1, addr2}} = userData
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        getLocation(setLocation, setError);
    }, [])
    
    function handleEditPincode() {
        setPopup({open: true, content: <PincodePop path='/cart' />})
    }
    function handleCurrentLocation() {
        setPopup({open: true, content: "Need to impliment Geo-API"})
    }
    function handleAddress(e) {
        const newAddress = {homeId, addr1, addr2};
        newAddress[e.target.name] = e.target.value;
        setUserData(prev => ({...prev, address: newAddress}));
    }

  return (
    <AddressStyle>
        <Button className="urLoc" onClick={handleCurrentLocation} label={<><img src={locationIcon} alt="location" /><span>Your Current Location</span></>} />
        <div className="or">or</div>
        <Collapse label="Enter Address Manually" comp={
            <>
                <Textbox className="addr" name='homeId' value={homeId} onChange={handleAddress} placeholder="Door No./Flat No. / House ID" />
                <Textbox className="addr" name='addr1' value={addr1} onChange={handleAddress} placeholder="Address Line 1" />
                <Textbox className="addr" name='addr2' value={addr2} onChange={handleAddress} placeholder="Address Line 2" />
                <Textbox className="addr pin" disabled={true} value={`Pincode: ${pincode}`}  />
                <button className='editPincode' onClick={handleEditPincode}>Edit Pincode</button>
            </>
        } className="addrCollapse" />
    </AddressStyle>
  )
}

const AddressStyle = styled.div`
    .urLoc {
        margin-bottom: 30px;
        font-size: 1.2rem;
    }
    .or {
      text-align: center;
      color: #ffffff;
      position: relative;
      width: 100%;
      height: 30px;
      margin-bottom: 24px;
      &::before, &::after {
        content: "";
        width: 100%;
        height: 1px;
        position: absolute;
        left: 0;
        top: -8px;
        background: #ffffff80;
      }
      &::after {
        top: 28px;
      }
    }
    .addr {
        border: none;
        font-size: 1rem;
        &.pin {
            font-weight: 700;
        }
        &:not(:last-child) {
            margin-bottom: 12px;
        }
    }
    .editPincode {
        border: none;
        background-color: transparent;
        color: var(--primary);
        margin-left: auto;
        font-size: 0.7rem;
        transition: 0.3s zoom;
        &:hover {
            zoom: 1.2;
        }
    }
    .addrCollapse .isOpen {
        font-size: 1.2rem;
    }
`


