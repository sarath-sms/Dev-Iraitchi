import React from 'react'
import styled from 'styled-components'
import Textbox from './Textbox'
import SearchIcon from '../assets/icons/search.svg'

export default function SearchBtn({onChange}) {
  return (
    <SearchBtnStyle>
        <Textbox className={'searchText'} name="search box" onChange={onChange} />
        <button className='searchBtn'><img src={SearchIcon} /></button>
    </SearchBtnStyle>
  )
}

const SearchBtnStyle = styled.div`
    position: relative;
    .searchBtn {
      position: absolute;
      right: 12px;
      top: 12px;
      border: none;
      background: transparent;
    }
`