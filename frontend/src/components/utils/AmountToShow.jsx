import React from 'react'
import styled from 'styled-components'

export default function AmountToShow({price, available}) {
    if(available) {
        if(Array.isArray(price)) {
            const amount = price?.reduce((acc, cur) => !!cur?.['available'] && ({...acc, [cur?.['type']]: cur?.['price']}), {})
            const {Small, Medium, Large} = amount;
            return (<AmountStyle>
                ₹ {Medium || Small || Large} <span>per kg</span>
            </AmountStyle>)
        } else {
            return (
                <AmountStyle>
                    ₹ {price} <span>per kg</span>
                </AmountStyle>
            )
        }
    } else {
        return (
            <AmountStyle className='notAvail'>
                Unavailable
            </AmountStyle>
        )
    }
}

const AmountStyle = styled.h2`
    span {
        font-weight: 400;
        font-size: 16px;
    }
    &.notAvail {
        color: var(--disabled);
    }
`