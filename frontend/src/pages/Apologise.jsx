import React from 'react'
import apologiseImg from '../assets/images/apologise.svg'
import styled from 'styled-components'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

export default function Apologise() {
    const navigate = useNavigate()
  return (<ApologiseStyle className='mainContainer'>
            <div className="content">
                <img src={apologiseImg} alt="we apologise" />
                <h3>Sorry! We don't deliver to this Pincode yet. We're expanding soon — thank you for your patience.</h3>
            </div>
            <footer>
                <Button className="secondary" onClick={() => navigate(-1)} label="Back" disable={false} />
            </footer>
    </ApologiseStyle>
    
  )
}
const ApologiseStyle = styled.div`
    height: 100%;
    .content {
        height: calc(100% - 150px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        padding: 2rem;
        img {
            width: 50%;
        }
        h3 {
            text-align: center;
        }
    }
`
