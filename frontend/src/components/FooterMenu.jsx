import React, { useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import cartIcon from '../assets/icons/menu/cart.svg';
import feedbackIcon from '../assets/icons/menu/feedback.svg';
import profileIcon from '../assets/icons/menu/profile.svg';
import { IraiContextContainer } from '../context/Context';
import PincodePop from './utils/PincodePop';

export default function FooterMenu() {
  const {userData: {pincode}, iraiData, setPopup} = useContext(IraiContextContainer);
  const navigate = useNavigate();

  const CartEmpty = () => (<CartEmptyStyle>
    <p>Looks like you haven't added anything to your cart yet.</p>
  </CartEmptyStyle>)

  function handleCartNav() {
    if(!!iraiData?.length){
      if(!!pincode) {
            navigate('/cart')
        } else {
            setPopup({open:true, content: <PincodePop path="/cart" />});
        }
    } else {
      setPopup({open: true, content: <CartEmpty />})
    }
  }
  return (
    <FooterMenuStyle>
        <button onClick={() => navigate('/profile')}><img src={profileIcon} alt="profile" /></button>
        <button className='cartIcon' onClick={handleCartNav}><img src={cartIcon} alt="cart" />{!!iraiData?.length && <span className='totalItems'>{iraiData.length}</span>}</button>
        <button onClick={() => navigate('/feedback')}><img src={feedbackIcon} alt="feedback" /></button>
    </FooterMenuStyle>
  )
}

const CartEmptyStyle = styled.div`
  p {
    text-align: center;
    font-style: italic;
  }
`

const FooterMenuStyle = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 1.2rem;
    button {
        background-color: transparent;
        border: none;
        position: relative;
        &.cartIcon {
          .totalItems {
            background: var(--error);
            color: #ffffff;
            height: 20px;
            width: 20px;
            position: absolute;
            border-radius: 50%;
            right: -4px;
            font-weight: 700;
            padding: 2px 6px;
            font-size: 12px;
          }
        }
    }
`