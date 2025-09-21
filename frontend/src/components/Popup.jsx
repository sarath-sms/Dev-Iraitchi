import React, { useContext, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { IraiContextContainer } from '../context/Context'

export default function Popup() {
    const {popup:{open, content}, setPopup} = useContext(IraiContextContainer);
    const popupRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
          if (popupRef.current && !popupRef.current.contains(event.target)) {
            // close popup
            setPopup({open: false});
          }
        }
    
        if (open) {
          document.addEventListener("mousedown", handleClickOutside);
        } else {
          document.removeEventListener("mousedown", handleClickOutside);
        }
    
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [open]);

  return (open && <PopupStyle>
    <div className="popupContent" ref={popupRef}>
        {content}
    </div>
    </PopupStyle>)
}

const PopupStyle = styled.div`
    /* background-color: var(--secondary); */
    background-color: rgba(38, 53, 93, 0.95);
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    .popupContent {
      background-color: var(--secondary);
      width: calc(100% - 32px);
      margin: auto;
      padding: 24px 16px;
      box-shadow: var(--shadow);
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
`
