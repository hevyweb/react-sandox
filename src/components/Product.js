import React from 'react'

function Product(props) {

    return (
        <div className='product'>
            <img src={props.productData.image} className="productImage" alt="" />
            <div className="productName">{props.productData.name}</div>
            <div className="productPrice">{props.productData.price}</div>
            <a href={"buy/" + props.productData.id}>Buy now</a>
        </div>
    )
}

export default Product