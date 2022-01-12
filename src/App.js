import React, { useEffect, useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import CartContext from './contexts/CartContext';

const App = () => {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState(products)
  const [filterProducts, setFilterProducts] = useState(products);
  const [cart, setCart] = useState([])
  // const [productsSort, setProductsSort] = useState(filterProducts)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then(res => res.json())
      .then(data => {
        data.map(product => product.quantity = 0)
        setProducts(data)
        setFilterProducts(data)
        setCategories(data.map(p => p.category).filter((value, index, array) => array.indexOf(value) === index))
      }

      )
  }
    , [])


  const sortByDropDown = (sort) => {
    console.log(sort);

    if (sort === 'Alphabetically, A-Z') {
      setFilterProducts(filterProducts.sort((a, b) => a.title === b.title ? 0 : a.title < b.title ? -1 : 1))
    } else if (sort === "Alphabetically, Z-A") {
      setFilterProducts(filterProducts.sort((a, b) => b.title === a.title ? 0 : b.title < a.title ? -1 : 1))
    } else if (sort === "Price, low to high") {
      setFilterProducts(filterProducts.sort((a, b) => a.price - b.price))
    } else if (sort === "Price, high to low") {
      setFilterProducts(filterProducts.sort((a, b) => b.price - a.price))
    }
    // console.log(filterProducts);
  }

  const filterByDropDown = (filter) => {
    if (filter === "all") {
      setFilterProducts(products)
    } else {
      setFilterProducts(products.filter((p) => (p.category === filter)))
    }
  }

  const handleAddToCart = (id) => {
    products.find(product => product.id === Number(id)).quantity++
    if (products.find(product => product.id === Number(id)).quantity === 1) {
      setCart([...cart, products.find(product => product.id === Number(id))])
    } else {
      setCart([...cart]);
    }

  }

  return (
    <>
      <Header categories={categories} selectByFilter={filterByDropDown} sort={sortByDropDown} />
      <Cart cart={cart} />
      <CartContext.Provider value={{ addToCart: handleAddToCart }}>
        <Products productsArr={filterProducts} />
      </CartContext.Provider>
    </>
  )
}

export default App;


