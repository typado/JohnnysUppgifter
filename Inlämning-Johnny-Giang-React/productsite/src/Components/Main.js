import React from 'react'
import { Home } from './Home'
import { ProductInfo } from './ProductInfo'
import { Products } from './Products'

export const Main = (props) => {
  return (
    <main>
        { props.activePage == 'Products' ? <Products setOneProduct={props.setOneProduct}/>  : '' }
        { props.activePage == 'Home' ? <Home />  : '' }
        { props.activePage == 'productInfo' ? <ProductInfo oneProduct={props.oneProduct}/>  : '' }
    </main>
  )
}
