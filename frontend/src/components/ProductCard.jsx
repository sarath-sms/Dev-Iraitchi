import React, { useContext } from 'react'
import styled from 'styled-components'
import AmountToShow from './utils/AmountToShow'
import { IraiContextContainer } from '../context/Context'
import Categorized from './utils/Categorized'
import AddProductPop from './utils/AddProductPop'

export default function ProductCard({product}) {
    console.log(product)
    const {setPopup} = useContext(IraiContextContainer);

    const closeImage = () => setPopup({open: false});
    const openImage = () => setPopup({open: true, content: <img src={product.image} alt="iraitchi" onClick={closeImage} />});
    function handleAddProduct() {
        setPopup({open: true, content: <AddProductPop picked={product} />})
    }

    return (
    <CardStyle>
        {!!product?.image && <img src={product.image} alt="iraitchi" onClick={openImage} />}
        <div className="productContent" onClick={handleAddProduct}>
            <h3>{product?.name || "-"}</h3>
            <AmountToShow price={product?.price} />
            <Categorized list={[product?.category, product?.subCategory]} />
        </div>
        <div className="action"  onClick={handleAddProduct}>
            <button>+</button>
        </div>
    </CardStyle>
  )
}

const CardStyle = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    border: 1px solid var(--primary);
    border-radius: 4px;
    overflow: hidden;
    padding: 4px;
    cursor: pointer;
    transition: 0.4s all;
    &:hover {
        box-shadow: rgba(255 235 59 / 33%) 0px 3px 12px 0px;
        background: var(--primary);
        h3, h2, button {
            color: var(--secondary);
        }
        .action {
            background: var(--secondary);
            button {
                color: var(--primary);
                zoom: 1.3;
            }
        }
        img {
            box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        }
        .catag {
            p {
                color: var(--secondary);
            }
        }
    }
    h2 {
        margin-bottom: 12px;
    }
    img {
        width: 80px;
    }
    .productContent {
        flex: 1;
        align-self: stretch;
        padding-top: 4px;
        h3 {
            font-size: var(--font-medium);
        }
    }
    .action {
        background-color: var(--primary);
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0 2px 2px 0;
        width: 30px;
        button {
            color: var(--secondary);
            background-color: transparent;
            border: none;
            font-size: 18px;
            font-weight: 700;
            border-radius: 50%;
            line-height: 0;
            transition: 0.3s zoom;
        }
    }
`
