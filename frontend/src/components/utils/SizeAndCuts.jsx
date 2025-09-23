import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import RadioBtn from '../RadioBtn'

export default function SizeAndCuts({price, cuts = [], action}) {
  
  const [sizeList, setSizeList] = useState([])
  const [checkedSize, setCheckedSize] = useState('');
  
  function handleUiComp() {
    let obj = {}
    if(!!cuts?.length) {
      const selectCut = cuts[0];
      obj = {...obj, cuts: selectCut};
    }
    if(Array.isArray(price)) {
      const sizes = price?.map(node => node?.price && node?.type)
      setSizeList(sizes)
      const defaultSelect = sizes[Math.floor(sizes.length/2)]
      const changePrice = price.find(p => p.type === defaultSelect)?.price
      obj = {...obj, type: defaultSelect, price: changePrice}
      setCheckedSize(defaultSelect)
    } else {
      setSizeList(['Small', 'Medium', 'Large']);
      obj = {...obj, type: 'Medium', price: price}
      setCheckedSize('Medium')
    } 
    return action(obj)
  }

  useEffect(() => {
    return handleUiComp();
  }, [])

  function handleSize(e) {
    const type = e?.target?.value;
    if(Array.isArray(price)) {
      const changePrice = price.find(p => p.type === type)?.price
      // console.log(changePrice)
      action({type, price: changePrice})
    } else {
      action({type})
    }
  }

  function handleCuts(e) {
    const cutType = e.target.value
    action({cuts: cuts.find(e => e.type === cutType)})
  }

  return (
    <SizeStyle>
        {!!sizeList?.length && <div className="sizeSec">
            <h3>Size:</h3>
            <div className="sizeList">
              {sizeList?.map((sl,i) => <RadioBtn name="size" checked={sl === checkedSize} label={sl} key={'size_'+i} value={sl} onChange={handleSize} />)}
            </div>
        </div>}
        {!!cuts?.length && <div className="cutTypes">
          <h3>Type of Cuts:</h3>
          <p className="quote">Basic is to remove its scales, fins, and internal organs</p>
          <div className="cutList">
            {/* need to do TODO : default checked is not working but radio is checked after css is not applying initially */}
            {cuts?.map((ct, i) => <RadioBtn name="cut" checked={i === 0} label={ct?.type} key={'cut_'+i} value={ct.type} onChange={handleCuts} />)}
          </div>
        </div>}
    </SizeStyle>
  )
}

const SizeStyle = styled.div`
  .cutTypes {
    margin-bottom: 24px;
    .quote {
      background-color: var(--collapseBg);
      color: #ffffff;
      font-size: 10px;
      padding: 4px;
      margin-bottom: 4px;
    }
  }
  .sizeSec {
    margin-bottom: 24px;
    .sizeList {
        display: flex;
        gap: 6px;
    }
  }
`
