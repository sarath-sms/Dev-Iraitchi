import React, { useContext, useEffect, useState } from 'react'
import { IraiContextContainer } from '../context/Context';
import styled from 'styled-components';

export default function TimeSlots() {
    
    const {iraiData, cartDetails, setCartDetails} = useContext(IraiContextContainer);
    const [slots, setSlots] = useState([]);
    const [selectedSlot, setSelectedSlot] = useState('');
    function generateTimeSlots() {
        console.log(cartDetails, 'cartDetails');
        const newDate = new Date();
        const currentHour = newDate.getHours()
        const activeHours = [5, 6, 7, 8, 9, 10, 11, 12, 13, 17, 18, 19, 20, 21, 22, 23, 24]
        const slotValues = activeHours.map((h, i) => {
            let fromTo = [];
            const from = activeHours[i];
            const to = activeHours[i+1]
            if(!!from && !!to) {
                fromTo = [from, to]
                if(from <= currentHour) {
                    fromTo.push('disabled')
                }
            }
            return fromTo
        })
        setSlots(() => slotValues.filter(arr => !!arr.length))
    }

    useEffect(() => {
        setSelectedSlot(cartDetails.deliverBetween);
    }, [])

    useEffect(() => {
        generateTimeSlots()
    }, [iraiData])

    function formatTo12Hour(hour24) {
        let period = hour24 < 12 ? "AM" : (hour24 - 12) === 12 ? "AM" : "PM";
        // let period = hour24 >= 12 ? "PM" : "AM";
        let hour12 = hour24 % 12 || 12; // convert 0 → 12 and 13–23 → 1–11
        return <><span>{hour12}</span>{period}</>;
    }

    function handleSlotSelection(e) {
        console.log(e.target.value)
        setSelectedSlot(e.target.value)
        setCartDetails(prev => ({...prev, deliverBetween: e.target.value}))
    }

  return (
    <TimeSlotsStyle>
        {slots.map((arr, i) => {
            let from = formatTo12Hour(arr[0]);
            let to = formatTo12Hour(arr[1]);
            let disable = arr[2] || '';
            return <label className="slotTime" htmlFor={`s_${i}`} key={`slot_${i}`}>
                <input type="radio" name="slot" id={`s_${i}`} onChange={handleSlotSelection} value={arr.join(',')} checked={arr.join(',') === cartDetails.deliverBetween} disabled={!!disable} />
                <div className='times'>{from} - {to}</div>
            </label>
        })}
    </TimeSlotsStyle>
  )
}

const TimeSlotsStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 6px;
    .slotTime {
        width: 30%;
        input[type=radio] {
            display: none;
            & + .times {
                border: 1px solid var(--primary);
                border-radius: 4px;
                padding: 4px;
                text-align: center;
                cursor: pointer;
                font-size: 0.6rem;
                transition: 0.3s all;
                span {
                    font-size: 0.8rem;
                    font-weight: 700;
                }
            }
            &:not(:disabled) + .times:hover {
                box-shadow: var(--shadow);
            }
            &:disabled + .times {
                opacity: 0.5;
                border-color: var(--disabled);
                color: var(--secondary);
                background-color: var(--disabled);
                text-align: center;
                cursor: not-allowed;
            }
            &:checked + .times {
                background: var(--primary);
                color: var(--secondary);
            }
        }
    }
`
