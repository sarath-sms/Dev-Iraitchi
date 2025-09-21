import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';
import Textbox from '../../components/Textbox';
import { useNavigate } from 'react-router-dom';
import { IraiContextContainer } from '../../context/Context';
import { testRegex } from '../utils/commonFunctions';

export default function UserLogin() {

  const {userData: {mobile, iraiVerify = false}, setUserData} = useContext(IraiContextContainer)
  const navigate = useNavigate();

  const [btnDisable, setBtnDisable] = useState(true);

  function proceed() {
    navigate('/verifyOtp');
  }

  useEffect(() => {
    if(iraiVerify) {
      navigate('/products');
    }
  }, [])

  useEffect(() => {
    if(testRegex(/^[6789]\d{9}$/, mobile)) {
      setBtnDisable(false)
    } else {
      setBtnDisable(true)
    }
  }, [mobile])

  function handleMobile(e) {
    setUserData(prev => ({...prev, mobile: e.target.value}))
  }

  return (
    <Style className='mainContainer'>
      <section className="iraiScreen">
        <div className="welcome">
          <p>
            Welcome! We're excited to have you here. Enter your phone number to unlock exclusive offers, updates, and a seamless experience with us.
            <br/><br/>Your number is safe with us - no spam, <br /> <b>only value!</b>
          </p>
        </div>
        <Textbox className="mobTxt" value={mobile} onChange={handleMobile} maxLength={10} placeholder="Enter Your Mobile Number" inputmode="numeric" />
      </section>
      <footer>
        <Button className="primary" label="ENTER" disable={btnDisable} onClick={proceed} />
      </footer>
    </Style>
  )
}

const Style = styled.div`

  .iraiScreen {
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: center;
    padding-bottom: 50%;
  }
  .welcome {
    text-align: center;
    line-height: 24px;
    p {
      margin-bottom: 42px;
    }
  }
  .mobTxt {
    font-weight: 700;
    text-align: center;
    &:not(:placeholder-shown) {
        letter-spacing: 10px;
      }
  }
`