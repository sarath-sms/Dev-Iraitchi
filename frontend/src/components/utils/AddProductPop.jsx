import React, { useContext } from 'react'
import styled from 'styled-components'
import productImg from '../../assets/temp/fishImage.jpg'
import Button from '../Button'
import RadioBtn from '../RadioBtn'
import { useNavigate } from 'react-router-dom'
import { IraiContextContainer } from '../../context/Context'

export default function AddProductPop({picked}) {
    const {
        name,
        cutTypes = null,
        description, image, price,
        subCategory, category
    } = picked
    const {setPopup} = useContext(IraiContextContainer);
    const navigate = useNavigate();

    function handleToCart() {
        navigate('/cart');
        setPopup({open:false});
    }
  return (
    <AddProductStyle>
        {/* <h2>{name}</h2>
        {image && "in image tag"}
        {!!cutTypes && "radio button with cut types"}
        {price && "in h2 tag"}
        {(category && subCategory) && "category and subcategory in small font"}
        {description && "collapse"} */}
        <div className="titleCard">
            <img className="productImg" src={productImg} alt="irai image" />
            <div className="titleContent">
                <p>Vanjaram | blabla | blablabla</p>
                <h4>Price: <span>{'800'}</span>/kg <span className="isAvail">available</span></h4>
            </div>
        </div>
        <div className="quantitySec">
            <div className="quantityAction">
                <button> - </button>
                <span className="quantityCount"> 2 </span>
                <button> + </button>
            </div>
            <h2 className="priceSec"> Rs. {'1600'} </h2>
        </div>

        <div className="cutTypes">
            <h3>Type of Cuts:</h3>
            <p className="quote">Basic is to remove its scales, fins, and internal organs</p>
            <div className="cutList">
                <RadioBtn label="Full fish with slice line" />
                <RadioBtn label="Slice cut with head and tail" />
                <RadioBtn label="Slice cut without head" />
            </div>
        </div>

        <div className="sizeSec">
            <h3>Size:</h3>
            <div className="sizeList">
                <RadioBtn label="Small" />
                 <RadioBtn label="Medium" />
                <RadioBtn label="Large" />
            </div>
        </div>

        <div className="actionSection">
            <Button className="secondary" label="BUY NOW" disable={false}  />
            <Button className="primary" label="ADD TO CART" onClick={handleToCart} disable={false}  />
        </div>
    </AddProductStyle>
  )
}

const AddProductStyle = styled.div`
   max-height: calc(100% - 30px);
   overflow: auto;
   h3 {
        color: #ffffff;
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
            &.isAvail {
                color: var(--success);
                padding-left: 20px;
            }
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
        }
    }
    .priceSec {
        color: #ffffff;
        font-weight: 700;
    }
}
.cutTypes {
    margin-bottom: 24px;
    .quote {
        background-color: var(--collapseBg);
        color: #ffffff;
        font-size: 10px;
        padding: 4px;
        margin-bottom: 4px;
    }
}
.sizeSec {
    margin-bottom: 24px;
    .sizeList {
        display: flex;
        gap: 6px;
    }
}
button.secondary {
    margin-bottom: 16px;
}
`
