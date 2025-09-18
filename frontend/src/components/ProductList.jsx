import React from 'react'
import styled from 'styled-components'
import ProductCard from './ProductCard'

export default function ProductList({products = []}) {
    // console.log(products)

  return (
    <ProductListStyle>
        {!!products.length ? products.map((product, i) => <ProductCard key={`product_${i}`} product={product} />) : "No Items Listed"}
    </ProductListStyle>
  )
}

const ProductListStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`
