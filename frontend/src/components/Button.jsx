import React from 'react'
import styled from 'styled-components'

export default function Button({label, disable = false, onClick, className}) {
  return label && <BtnStyle className={className} onClick={onClick && onClick} disabled={disable}> {label} </BtnStyle>
}

const BtnStyle = styled.button({
    boxSizing: "border-box",
    appearance: "none",
    backgroundColor: "transparent",
    border: "2px solid var(--primary)",
    borderRadius: "0.4em",
    cursor: "pointer",
    fontSize: "1.4rem",
    fontWeight: "400",
    lineHeight: "1",
    padding: "0.6em",
    textDecoration: "none",
    fontWeight: "700",
    color: "#26355D",
    boxShadow: "0 0 40px 40px var(--primary) inset, 0 0 0 0 var(--primary)",
    transition: "all 150ms ease-in-out",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    "&:hover, &:focus": {
        color: "var(--secondary)",
        outline: "0",
        background: "var(--primary)",
        boxShadow: "0 0 10px 0 var(--secondary) inset, 0 0 10px 4px var(--primary)"
    },
    "&.secondary": {
        background: "var(--secondary)",
        boxShadow: "0 0 40px 40px var(--secondary) inset, 0 0 0 0 var(--secondary)",
        color: "var(--primary)",
        "&:disabled": {
            color: "var(--secondary)"
        },
        "&:hover, &:focus": {
        color: "var(--secondary)",
        outline: "0",
        background: "var(--primary)",
        boxShadow: "0 0 10px 0 var(--primary) inset, 0 0 10px 4px var(--secondary)",
    },
    },
    "&.tiny": {
        padding: "0.3em 0.6em",
        background: "var(--success)",
        fontSize: "14px",
        boxShadow: "0 0 40px 40px var(--success) inset, 0 0 0 0 var(--success)",
        borderColor: "var(--success)",
        borderRadius: "0.2em",
        "&:hover, &:focus": {
            color: "var(--success)",
            outline: "0",
            background: "var(--secondary)",
            boxShadow: "0 0 10px 0 var(--success) inset, 0 0 10px 4px var(--primary)"
        },
    },
    "&:disabled, &.tiny:disabled, &.secondary:disabled, &.primary:disabled": {
        background: "var(--disabled)",
        cursor: "not-allowed",
        boxShadow: "none",
        border: "var(--disabled)",
        "&:hover, &:focus": {
            color: "var(--secondary)",
            outline: "0",
            boxShadow: "none"
        },
    }
})
