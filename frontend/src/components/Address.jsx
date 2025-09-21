import React, { useContext } from 'react'
import { IraiContextContainer } from '../context/Context'
import styled from 'styled-components'
import Button from './Button'
import locationIcon from '../assets/icons/currentLocation.svg'
import Collapse from './Collapse'
import Textbox from './Textbox'

export default function Address() {

    const {userData: {pincode}, setUserData, setPopup} = useContext(IraiContextContainer)

    function handleEditPincode() {
        setPopup({open: true, content: "working"})
    }
  return (
    <AddressStyle>
        <Button className="urLoc" label={<><img src={locationIcon} alt="location" /><span>Your Current Location</span></>} />
        <div className="or">or</div>
        <Collapse label="Enter Address Manually" comp={
            <>
                <Textbox className="addr" placeholder="Door No./Flat No. / House ID" />
                <Textbox className="addr" placeholder="Address 1" />
                <Textbox className="addr" placeholder="Address 2" />
                <Textbox className="addr" disabled={true} value={`Pincode: ${pincode}`}  />
                <button className='editPincode' onClick={handleEditPincode}>Edit Pincode</button>
            </>
        } className="addrCollapse" />
    </AddressStyle>
  )
}

const AddressStyle = styled.div`
    .urLoc {
        margin-bottom: 30px;
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


