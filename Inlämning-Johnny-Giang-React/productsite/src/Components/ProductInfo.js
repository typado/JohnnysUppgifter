import React from 'react'
import { fetchProduct } from './Data/ProductData'

export const ProductInfo = ({product}) => {
    useEffect(()=>{
        fetchProducts().then( result => {
            setProducts(result)
            setFilteredProducts(result)}
             )
         }
        ,
    []);
  return (
    <div>ProductInfo</div>
  )
}
