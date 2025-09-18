import React from 'react'
import styled from 'styled-components'
import AmountToShow from './utils/AmountToShow'

export default function ProductCard({product}) {
    console.log(product)
  return (
    <CardStyle>
        {!!product?.image && <img src={product.image} alt="iraitchi" />}
        <div className="productContent">
            <h3>{product?.name || "-"}</h3>
            <AmountToShow price={product?.price} />
        </div>
        <div className="action">
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
    img {
        width: 80px;
        border-radius: 2px 0 0 2px;
    }
    .productContent {
        flex: 1;
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
        &:hover > button{
                zoom: 1.2;
            }
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
