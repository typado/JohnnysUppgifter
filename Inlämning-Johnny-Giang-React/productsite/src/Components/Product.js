import React from 'react'

export const Product = ({product}) => {


  return (
    <div className="productgallery_card">
    <div className="productgallery_card_container">
        <img src={product.image} alt="cookies" className="hero-image"/>
        <div className="information">

            <div className="name">{product.title}</div>

            <div className="store">{product.category}</div>

          <div>
            <a href="" className="storebutton" 
            onChange={<productInfo 
              key={product.id}
              productPrice={product.price}
              productName={product.title} 
              productImg={product.image} 
              productInfo={product.description} 
              productCategory={product.category}/>}
               >More info</a>
            <a href="" className="storebutton">Purchase</a>
          </div>

        </div>
    </div>
</div>

  )
}
