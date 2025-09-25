import React, { useContext } from 'react'
import styled from 'styled-components'
import { IraiContextContainer } from '../context/Context';

export default function CartProduct({product}) {
    const {count, cuts = false, image, id, name, price, type} = product
    const {userData: {pincode}, setPopup, iraiData, setIraiData} = useContext(IraiContextContainer);

    function handleAddSub(e){
        const newCart = [...iraiData]
        let findData = newCart.findIndex(item => (item?.type === type) && (item?.id === id));
        if(e.target.name === 'add') {
            newCart[findData].count = count + 0.5;
        } else {
            if(count > 0.5) {
                newCart[findData].count = count - 0.5;
            } else {
                newCart.splice(findData, 1);
            }
        }
        setIraiData(newCart)
    }

  return (
    <CartProductStyle className='pn'>
        <img className='prodImg' src={image} alt={name} />
        <div className="cartNodeContent">
            <h5>{name}</h5>
            <p className="actualData"> <span>₹{price}</span> per Kg {cuts && <span className='small'> ({cuts?.type})</span>}</p>
            <div className="priceActions">
                <h3 className="productCost">₹{price * count}</h3>
                <div className="addsub">
                    <button name='sub' onClick={handleAddSub}>-</button>
                    <div className='cnt'>{count}</div>
                    <button name='add' onClick={handleAddSub}>+</button>
                </div>
            </div>
        </div>
    </CartProductStyle>
  )
}

const CartProductStyle = styled.div`
    &.pn {
        display: flex;
        gap: 8px;
        width: 100%;
        border: 1px solid var(--primary);
        border-radius: 4px;
        overflow-x: hidden;
        align-items: center;
        .prodImg {
            width: 80px;
        }
        .cartNodeContent {
            flex: 1;
            padding: 4px 4px 4px 0;
            width: calc(100% - 80px);
            h5 {
                background: var(--primary);
                color: var(--secondary);
                margin-bottom: 4px;
                border-radius: 0 4px 0 0;
                padding: 4px;
                font-size: calc(0.6rem + 1vw);
            }
            .actualData {
                font-size: calc(0.6rem + 1vw);
                color: #ffffff;
                margin-bottom: 4px;
                span {
                    color: var(--primary);
                    &.small {
                        font-size: 0.6rem;
                    }
                }
            }
            .priceActions {
                display: flex;
                justify-content: center;
                align-items: center;
                .productCost {
                    flex: 1;
                }
                .addsub {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    border-radius: 0 0 4px 0;
                    overflow: hidden;
                    .cnt {
                        font-weight: 700;
                        width: 32px;
                        color: #ffffff;
                    }
                    button {
                        font-weight: 700;
                        font-size: 1rem;
                        height: 24px;
                        width: 24px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                }
            }
        }
    }
`
