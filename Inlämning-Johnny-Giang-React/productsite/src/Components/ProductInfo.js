import React from 'react'

export const ProductInfo = (props) => {
  return (
    <div>
      <h1 className="titleProduct">{props.oneProduct.title}</h1>
      <h2 className="categoryProduct">{props.oneProduct.category}</h2>
      <img className="imageProduct" src={props.oneProduct.image}/>
      <h3 className="descriptionProduct">{props.oneProduct.description}</h3>
      <h1 className="priceProduct">${props.oneProduct.price}</h1>
      <a className="storebutton1">Purchase</a>
    </div>
  )
}
