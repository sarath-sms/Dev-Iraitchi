import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

export default function TimerResend() {

    const [timeLeft, setTimeLeft] = useState(300); // 5 minutes = 300 seconds
    const [enableResend, setEnableResend] = useState(false)

  useEffect(() => {
    if (timeLeft <= 0) return; // stop when 0
    if(!enableResend && (timeLeft < 280)) {
        setEnableResend(true);
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // Format mm:ss
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const resetTimer = () => {
    setTimeLeft(300);
    setEnableResend(false);
  }

  return (
    <Style>
        <p>{minutes}:{seconds.toString().padStart(2, "0")}</p>
        <button className={`anchorBtn ${enableResend ? 'show' : 'hide'}`} disabled={!enableResend} onClick={resetTimer}>Resend OTP</button>
    </Style>
  )
}

const Style = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
    .anchorBtn {
        background-color: transparent;
        color: var(--primary);
        font-size: 14px;
        border: none;
        &:hover {
            text-shadow: var(--primary) 1px 0 10px;
        }
        &.hide {
            visibility: hidden;
        }
    }
`
