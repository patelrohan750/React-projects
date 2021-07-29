import React,{useContext} from 'react'
import { ShopDetailsContext } from './shopContext';

const Navbar = () => {
    const data = useContext(ShopDetailsContext)
    return (
        <div className="container">
            <h1>We Have total {data.products.length} products</h1>
        </div>
    )
}

export default Navbar
