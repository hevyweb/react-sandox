import React from 'react'
import Product from './Product';
import Products from '../tmp/data'

function Maincontent() {
    let items = Products.map(productData => <Product key={productData.id} productData = {productData} />);
    return (
        <div className="mainContent">
            {items}
        </div>
    )
}

export default Maincontent