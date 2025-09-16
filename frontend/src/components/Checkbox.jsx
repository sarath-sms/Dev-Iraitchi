import React from 'react'
import styled from 'styled-components'

export default function Checkbox({name, id, value, label, className}) {
  return <CheckboxStyle htmlFor={id} className={className}>
      <input type="checkbox" name={name} id={id} value={value} />
      <span>{label}</span>
  </CheckboxStyle>
}

const CheckboxStyle = styled.label`
    display: flex;
    align-items: center;
    input[type="checkbox"] {
        height: 0;
        width: 0;
        margin: 14px;
        position: relative;
        &::before {
            content: '';
            height: 18px;
            width: 18px;
            border-radius: 4px;
            position: absolute;
            border: 1px solid var(--primary);
            left: -10px;
            top: -8px;
        }
        &:checked::after {
            content: '✓';
            position: absolute;
            color: var(--primary);
            left: -6px;
            top: -7px;
        }
    }
`
