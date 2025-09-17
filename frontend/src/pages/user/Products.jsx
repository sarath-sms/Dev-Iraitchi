import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Categories from '../../components/Categories'
import Textbox from '../../components/Textbox'
import PincodeChecker from '../../components/PincodeChecker';
import ProductList from '../../components/ProductList';
import SearchBtn from '../../components/SearchBtn';

export default function Products() {
  
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('fish')
  const [productList, setProductList] = useState([])

  function searchProduct(e) {
    setQuery(e.target.value);
  }

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
  }
`