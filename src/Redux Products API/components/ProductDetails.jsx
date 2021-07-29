import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { selectedProduct, removeSelectedProduct } from '../redux/actions'
const ProductDetails = () => {
    const { id } = useParams();
    console.log(id);
    const product = useSelector(state => state.selectedReducer)
    console.log(product);
    const dispatch = useDispatch();
    const fetchProductDetails = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
        dispatch(selectedProduct(response.data))
    }
    useEffect(() => {
        if (id) fetchProductDetails();
        return () => {
            dispatch(removeSelectedProduct())
        }

    }, [id])
    console.log(product.length);
    console.log(Object.keys(product).length);
    return (
        <div>
            {
                Object.keys(product).length === 0 ? (
                    <div className="spinner-border text-center" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                ) : (
                    <div className="container mt-5 mb-5">
                        <div className="card">
                            <div className="row g-0">
                                <div className="col-md-6 border-end">
                                    <div className="d-flex flex-column justify-content-center">
                                        <div className="main_image"> <img src={product.image} width="350" /> </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="p-3 right-side">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h3>{product.title}</h3>
                                        </div>
                                        <p className="product_category">{product.category}</p>
                                        <div className="mt-2 pr-3 content">
                                            <p>{product.description}</p>
                                        </div>
                                        <h3>${product.price}</h3>
                                        <button className="btn btn-outline-dark">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )

            }

        </div>
    )
}

export default ProductDetails
