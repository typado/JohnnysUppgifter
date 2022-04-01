import React, {useEffect, useState} from 'react'
import { Product } from './Product'
import { fetchProducts } from './Data/ProductData'

export const Products = (props) => {

    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])


    const onSearchChange = (e)=>{
        const filtered = products.filter(p => p.title.toLowerCase().includes(e.target.value.toLowerCase())   )
        setFilteredProducts(filtered)
    }


    useEffect(()=>{
        fetchProducts().then( result => {
            setProducts(result)
            setFilteredProducts(result)}
             )
         }
        ,
    []);




  return (
    <section className="products" id="products">
            <h1 className="heading">our products</h1>
            <input name="search" placeholder="...Search product"onChange={onSearchChange} />
            <div className="productgallery">
            {filteredProducts.map( p => <Product key={p.id} product={p} setOneProduct={props.setOneProduct} />  )}
            </div>
        
        </section>
  )
}
