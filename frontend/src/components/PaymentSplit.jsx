import React, { useContext } from 'react'
import { IraiContextContainer } from '../context/Context';
import styled from 'styled-components';

export default function PaymentSplit() {
    const {userData, cartDetails, setPopup, iraiData = [], setIraiData} = useContext(IraiContextContainer);
    
    function handleCuts(obj) {
        const {cuts, count} = obj
        const line =  cuts?.price ? `${count}*${cuts?.price}` : 'Free'
        return `Cuts:-${line}`
    }
    const subTotal = iraiData.reduce((acc, cur) => {
        const {price, cuts, count} = cur
        return acc + (price*count) + Math.round(cuts?.price*(count >=1 ? count : 0.8) || 0)
    }, 0)
    return (
    <PaymentSplitStyle>
        <tbody>
            {iraiData?.map((irai, i) => {
                const {count, price, name, cuts} = irai
                return <tr key={`splitUp_${i}`}>
                    <td className='left'>
                        {name} <br />
                        <span> ({count} * ₹{price})</span>
                        <span> + ({handleCuts({cuts, count})})</span>
                    </td>
                    <td className='right'>₹{(count*price)+Math.round(cuts?.price*(count >=1 ? count : 0.8) || 0)}</td>
                </tr>
            })}
            <tr>
                <td>Sub-Total</td>
                <td className='right'>₹{subTotal}</td>
            </tr>
            <tr>
                <td>5% GST <span>{subTotal}*0.05</span></td>
                <td className='right'>₹{subTotal*0.05}</td>
            </tr>
            <tr>
                <td></td>
                <td></td>
            </tr>
            {/* <tr>
                <td></td>
                <td></td>
            </tr> */}
        </tbody>
    </PaymentSplitStyle>
  )
}

const PaymentSplitStyle = styled.table`
    width: 100%;
    border: 1px solid var(--primary);
    padding: 4px;
    border-collapse: separate;
    border-spacing: 0 0.4rem;
    font-size: 0.9rem;
    .left {
        width:70%;
    }
    .right {
        text-align: right;
        width: 30%
    }
    td {
        span {
            font-size: 0.6rem;
        }
    }
`
