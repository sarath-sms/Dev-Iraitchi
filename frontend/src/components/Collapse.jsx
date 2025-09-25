import React, { useState } from 'react'
import styled from 'styled-components'
import Button from './Button'

export default function Collapse({isOpen = true,label, name, options, comp, className}) {

    const [open, setOpen] = useState(isOpen);
    const [selectedItems, setSelectedItems] = useState([])

    function toggleOpen() {
        setOpen(prev => !prev);
    }

    function selectItem(node) {
        console.log(node)
    }

  return (
    <CollapseStyle className={className}>
        <Button
            className="isOpen"
            onClick={toggleOpen}
            label={<><span>{label}</span> <i className={`collapseArrow ${open ? 'down' : 'up'}`}></i></>}
        />
        <div className={`collapseOptions ${open ? 'show' : 'hide'}`}>
            {options && options?.map((node, i) => <div className={`selectOption`} onClick={() => selectItem(node)} key={name+i}> {node?.label} </div>)}
            {comp && comp}
        </div>
    </CollapseStyle>
  )
}

const CollapseStyle = styled.div`
    button {
        box-shadow: none;
        background-color: var(--primary);
        color: var(--secondary);
        display: flex;
        justify-content: space-between;
        align-items: center;
        &:hover, &:focus {
            box-shadow: none;
        }
    }
    .collapseArrow {
        width: 0;
        height: 0;
        border-left: 16px solid transparent;
        border-right: 16px solid transparent;
        border-bottom: 16px solid var(--secondary);
        rotate: 180deg;
        transition: 0.3s all;
        &.up {
            rotate: 0deg;
        }
    }
    .collapseOptions {
        background-color: var(--collapseBg);
        padding: 20px 10px 10px;
        margin-top: -6px;
        overflow: hidden;
        border-radius: 0 0 10px 10px;
        transition: 0.2s all;
        &.show {
            min-height: 100px;
        }
        &.hide {
            height: 0px;
            margin: 0;
            padding: 0;
        }
        .selectOption {
            
        }
    }
`