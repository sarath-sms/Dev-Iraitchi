import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import cartIcon from '../assets/icons/menu/cart.svg';
import feedbackIcon from '../assets/icons/menu/feedback.svg';
import profileIcon from '../assets/icons/menu/profile.svg';

export default function FooterMenu() {

    const navigate = useNavigate();

  return (
    <FooterMenuStyle>
        <button onClick={() => navigate('/profile')}><img src={profileIcon} alt="profile" /></button>
        <button onClick={() => navigate('/cart')}><img src={cartIcon} alt="cart" /></button>
        <button onClick={() => navigate('/feedback')}><img src={feedbackIcon} alt="feedback" /></button>
    </FooterMenuStyle>
  )
}

const FooterMenuStyle = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 1.2rem;
    button {
        background-color: transparent;
        border: none;
    }
`