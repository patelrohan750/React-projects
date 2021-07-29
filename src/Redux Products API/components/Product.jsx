import React from 'react'
import { Link } from 'react-router-dom'
const Product = ({product}) => {
    // console.log(product);
    return (
        <div className="mb-3">
            <Link to={`/product/${product.id}`}>
            <div className="card product me-3  h-100" style={{width: "18rem"}}>
                <img src={product.image} className="card-img-top img-fluid" style={{padding:"30px"}}  alt="..." />
                <div className="card-body">
                    <h5 className="card-title product_title">{product.title}</h5>
                    <p className="card-text product_category">{product.category}</p>
                    <h5 className="card-title product_price">${product.price}</h5>
                 
                   
                </div>
            </div>
            </Link>
        </div>
    )
}

export default Product
