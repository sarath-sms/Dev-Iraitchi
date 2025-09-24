import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import OtpInput from 'react-otp-input';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import TimerResend from '../../components/TimerResend';
import { IraiContextContainer } from '../../context/Context';
import { maskMobile } from '../utils/commonFunctions';

export default function VerifyOtp() {
  const {userData: {mobile, iraiVerify = false}, setUserData} = useContext(IraiContextContainer)
    const navigate = useNavigate()
    // need to do TODO
    // same functionality for resend otp
    // @myapp.com #1234 ===> send message at the end
    /*
    sample message template for backend:
    ====================================
        Your OTP code is 482931 for IRAITCHI. 
        It is valid for 10 minutes. 
        Do not share this code with anyone.

        @iraitchi.com #482931
    */
    const [otp, setOtp] = useState('');
    const [error, setError] = useState('');
    const [btnDisable, setBtnDisable] = useState(true)

    function verifyOtp() {
        if(otp === "5555") {
          navigate('/products');
          setUserData(prev => ({...prev, iraiVerify: true}));
        } else {
          setError('Incorrect OTP');
        }
    }

    useEffect(() => {
      if(!mobile) return navigate('/login');
      if(iraiVerify) return navigate('/products');
        // ✅ Auto-detect OTP via Web OTP API (Android Chrome)
        // followinmg if condition should be in .then after api call
        if ("OTPCredential" in window) {
          const ac = new AbortController();
          navigator.credentials
            .get({
              otp: { transport: ["sms"] },
              signal: ac.signal,
            })
            .then((otpCredential) => {
              if (otpCredential && otpCredential.code) {
                setOtp(otpCredential.code); // Autofill react-otp-input
              }
            })
            .catch((err) => console.log("OTP Auto-read error:", err));
    
          return () => ac.abort();
        }
      }, []);

      useEffect(() => {
        if(otp.length === 4) {
          setBtnDisable(false);
        } else {
          setBtnDisable(true);
        }
      }, [otp])

      const handleKeyPress = (e) => {
          if((otp?.length === 4) && (e?.key === "Enter")) {
            verifyOtp();
          }
        };

  return (
    <Style className='mainContainer'>
        <section className="iraiScreen">
            <div className="otpContainer">
              <p className='msg'>An OTP has been sent to your mobile number ending with {!!mobile && maskMobile(mobile)}</p>
                <OtpInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={4}
                    onKeyDown={handleKeyPress}
                    containerStyle="reactOtp"
                    renderSeparator={<span className='seperator'>  </span>}
                    renderInput={(props) => <input {...props} autoComplete='one-time-code' className={`otpTxt ${!!error ? 'err' : ''}`} inputMode="numeric" />}
                />
                <TimerResend />
                {error && <h4 className="error">{error}</h4>}
            </div>
        </section>
        <footer>
            <Button className="primary" label="VERIFY OTP" disable={btnDisable} onClick={verifyOtp} />
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
.msg {
  text-align: center;
  margin-bottom: 2rem;
}
.otpTxt {
    width: 2.4em !important;
    padding: 0.6em;
    font-size: 1.6em;
    border-radius: 0.4em;
    color: var(--secondary);
    border-color: var(--primary);
    font-weight: 700;
    &.err {
        border-color: var(--error);
    }
}
.reactOtp {
    justify-content: center;
    margin-bottom: 1rem;
}
.seperator {
    padding: 0 8px;
}
.error {
    color: var(--error);
    text-align: center;
}
`