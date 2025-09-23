import React from 'react'
import styled from 'styled-components'

export default function RadioBtn({name, id, value, label, className, onChange, checked = false}) {
  return <RadioBtnStyle htmlFor={id} className={className}>
      <input type="radio" name={name} id={id} defaultValue={value} onChange={onChange} defaultChecked={checked} />
      <span>{label}</span>
  </RadioBtnStyle>
}

const RadioBtnStyle = styled.label`
    display: flex;
    align-items: center;
    input[type="radio"] {
        height: 0;
        width: 0;
        margin: 14px;
        position: relative;
        &::before {
            content: '';
            height: 18px;
            width: 18px;
            border-radius: 50%;
            position: absolute;
            border: 1px solid var(--primary);
            left: -10px;
            top: -8px;
        }
        &:checked::after {
            content: '';
            height: 10px;
            width: 10px;
            border-radius: 50%;
            position: absolute;
            background: var(--primary);
            left: -6px;
            top: -4px;
        }
    }
`
