import React from 'react'
import styled from 'styled-components'

export default function Textbox({value = '', placeholder, disabled = false, className, onChange, inputmode = "email", maxLength = 200, name}) {
  return <TextStyle type="text" disabled={disabled} className={className && className} defaultValue={value} placeholder={placeholder} name={name} onChange={onChange && onChange} inputMode={inputmode} maxLength={maxLength} />
}


const TextStyle = styled.input`
    padding: 0.6em;
    font-size: 1.4em;
    border-radius: 0.4em;
    width: 100%;
    color: var(--secondary);
    border-color: var(--primary);
    &:focus-visible {
      outline: none;
      box-shadow: 0 0 10px 0 var(--secondary) inset, 0 0 10px 4px var(--primary);
    }
    &:disabled {
      background: var(--disabled);
    }
    /* &:not(:placeholder-shown) {
      letter-spacing: 10px;
      background: transparent; 
      color: var(--primary);
    } */
`