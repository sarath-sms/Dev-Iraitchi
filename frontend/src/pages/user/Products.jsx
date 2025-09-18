import React, { useContext, useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import Categories from '../../components/Categories'
import Textbox from '../../components/Textbox'
import PincodeChecker from '../../components/PincodeChecker';
import ProductList from '../../components/ProductList';
import SearchBtn from '../../components/SearchBtn';
import FooterMenu from '../../components/FooterMenu';
import { fishes, meat } from '../utils/ProductsData';
import { IraiContextContainer } from '../../context/Context';

export default function Products() {

  const {iraiData} = useContext(IraiContextContainer)

  console.log(iraiData, "context from main js file is working fine")
  
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('fish')
  // const [productList, setProductList] = useState([])

  function searchProduct(e) {
    setQuery(e.target.value);
  }

  const productList = useMemo(() => {
    if(category === 'fish') {
      return fishes
    } else if(category === 'meat') {
      return meat
    }
  }, [category])

  useEffect(() => {
    if (!query) return; // Skip empty input

    const timeout = setTimeout(() => {
      // ✅ API call after typing stops for 800ms
      console.log(query, "🙏🏼")
    }, 800); // wait 800ms after user stops typing

    return () => clearTimeout(timeout); // cleanup
  }, [query]);

const receiveCategory = (categoryName) => setCategory(categoryName)
  return (
    <>
      <PincodeChecker />
      <Style className="mainContainer">
        <section className="iraiScreen">
          <Categories sendCategory={receiveCategory} />
          <SearchBtn onChange={searchProduct} />
          {/* <h1>{category}</h1> */}
          <ProductList products={productList} />
        </section>
        <footer>
          <FooterMenu />
        </footer>
      </Style>
    </>
  )
}

const Style = styled.div`
  .iraiScreen {
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding: 0 12px 12px; // only for this component
  }
`