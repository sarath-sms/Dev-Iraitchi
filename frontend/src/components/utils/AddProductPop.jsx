import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import Button from '../Button'
import RadioBtn from '../RadioBtn'
import { useNavigate } from 'react-router-dom'
import { IraiContextContainer } from '../../context/Context'
import SizeAndCuts from './SizeAndCuts'
import { removeFalsy } from '../../pages/utils/commonFunctions'
import PincodePop from './PincodePop'

export default function AddProductPop({picked}) {
    const {
        id, name, cutTypes = null, description, image = '', price
    } = picked
    const {userData: {pincode}, setPopup, setIraiData} = useContext(IraiContextContainer);
    const navigate = useNavigate();

    const [item, setItem] = useState({
        id,
        name,
        count: 1,
        // price: 800,
        cuts: null
    })
    
    function handleBuyNow() {
        const saveItem = removeFalsy(item);
        setIraiData(prev => ([...prev, saveItem]));
        if(!!pincode) {
            setPopup({open:false});
            navigate('/cart');
        } else {
            setPopup({open:true, content: <PincodePop path="/cart" />});
        }
    }

    function handleAddToCart() {
        const saveItem = removeFalsy(item)
        setIraiData(prev => ([...prev, saveItem]));
        if(!!pincode) {
            setPopup({open:false});
        } else {
            setPopup({open:true, content: <PincodePop path="/cart" />});
        }
    }

    function handleCount(val) {
        let count = item.count
        if(val === "add") {
            setItem(prev => ({...prev, count: count + 0.5 }))
        } else if(val === "sub") {
            if(count > 0.5) {
                setItem(prev => ({...prev, count: count - 0.5 }))
            } else {
                setPopup({open:false});
            }
        }
    }

    function handleSizeAndCuts(obj) {
        setItem(prev => ({...prev, ...obj }))
    }

  return (
    <AddProductStyle>
        <div className="titleCard">
            <img className="productImg" src={image} alt="irai image" />
            <div className="titleContent">
                <p className='name'>{name}</p>
                <h4>Price: <span>{item?.price}</span>/kg</h4>
            </div>
        </div>
        <div className="quantitySec">
            <div className="quantityAction">
                <button onClick={() => handleCount("sub")}> - </button>
                <span className="quantityCount"> {item?.count} </span>
                <button onClick={() => handleCount("add")}> + </button>
            </div>
            <h2 className="priceSec"> Rs. {item?.price * item?.count} </h2>
        </div>

        <SizeAndCuts price={price} cuts={cutTypes} action={handleSizeAndCuts} />

        <div className="actionSection">
            <Button className="secondary" label="BUY NOW" onClick={handleBuyNow} />
            <Button className="primary" label="ADD TO CART" onClick={handleAddToCart} />
        </div>
    </AddProductStyle>
  )
}

const AddProductStyle = styled.div`
   max-height: calc(100% - 30px);
   width: 100%;
   overflow: auto;
   h3 {
        color: #ffffff;
        margin-bottom: 4px;
    }
    .name {
        font-size: calc(0.9rem + 0.5vw);
        margin-bottom: 4px;
    }
   .titleCard {
    border: 1px solid var(--primary);
    border-radius: 4px;
    display: flex;
    gap: 12px;
    align-items: center;
    margin-bottom: 24px;
    .productImg {
        width: 50px;
    }
    h4 {
        color: #ffffff;
        font-weight: 400;
        span {
            font-weight: 700;
        }
    }
   }
   .quantitySec {
    display: flex;
    gap: 24px;
    margin-bottom: 24px;
    justify-content: center;
    .quantityAction {
        border: 1px solid var(--primary);
        border-radius: 4px;
        font-size: 1.4rem;
        font-weight: 700;
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        align-items: center;
        button {
            width: 30px;
            height: 30px;
            background-color: var(--primary);
            font-size: 1.4rem;
            font-weight: 700;
        }
        .quantityCount {
            color: #ffffff;
            padding: 0 10px;
            min-width: 40px;
            text-align: center;
        }
    }
    .priceSec {
        color: #ffffff;
        font-weight: 700;
    }
}
button.secondary {
    margin-bottom: 16px;
}
`
