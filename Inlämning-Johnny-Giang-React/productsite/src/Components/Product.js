import React, { useState } from 'react'
import { ProductInfo } from './ProductInfo'

export const Product = (props) => {

  

  const onProductInfo = (product)=>{
    props.setOneProduct(props.product)

}
return (
  <div className="productgallery_card">
    <div className="productgallery_card_container">
      <img src={props.product.image} alt="cookies" className="hero-image" />
      <div className="information">

        <div className="name">{props.product.title}</div>

        <div className="store">{props.product.category}</div>

        <div>
          <a className="storebutton"
            onClick={() => onProductInfo(props.product)}
          >More info</a>
          
        </div>

      </div>
    </div>
  </div>

)
}
