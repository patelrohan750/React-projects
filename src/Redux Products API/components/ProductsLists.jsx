import React,{useEffect} from 'react'
import axios from 'axios'
import { useSelector,useDispatch } from 'react-redux'
import { setProducts } from '../redux/actions'
import Product from './Product'
const ProductsLists = () => {
    const products = useSelector(state => state.productReducer.products)
    const dispatch = useDispatch();
    console.log(products);
    useEffect(() => {
        const fetchProducts=async()=>{
            const response=await axios.get('https://fakestoreapi.com/products')
            console.log(response)
            const data=await response.data
            console.log(data)
            dispatch(setProducts(data))
        }
        fetchProducts();
    }, [])
   
    return (
        <div className="d-flex flex-wrap container mt-5">
       
          {
            products.map(product=>{
                return(
                    <Product key={product.id} product={product}/>
                )
                
            })
          }
        </div>
    )
}

export default ProductsLists
