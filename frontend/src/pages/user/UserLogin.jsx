import React from 'react'
import styled from 'styled-components'
import Button from '../../components/Button'
import Textbox from '../../components/Textbox'
import { useNavigate } from 'react-router-dom'

export default function UserLogin() {

  const navigate = useNavigate();

  function proceed() {
    navigate('/verifyOtp');
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
        <Textbox className="mobTxt" maxLength={10} placeholder="Enter Your Mobile Number" inputmode="numeric" />
      </section>
      <footer>
        <Button className="primary" label="ENTER" disable={false} onClick={proceed} />
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