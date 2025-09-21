import React from 'react'
import styled from 'styled-components'

export default function Categorized({list = []}) {
    const catagoryList = list.map(node => !!node && node)
  return (catagoryList.length &&
    <CategoryStyle className='catag'>
        {/* <p> classifies: {catagoryList.map((node, i) => <b>{node}</b>)}</p> */}
        <p> classifies: {catagoryList.join(', ')}</p>
    </CategoryStyle>
  )
}

const CategoryStyle = styled.div`
    p {
        font-size: 10px;
        b {
            /* padding: 2px 4px;
            border-radius: 2px;
            border: 1px solid var(--primary);
            &:not(:last-child) {
                margin-right: 4px;
            } */
        }
    }
`
