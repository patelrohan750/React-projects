import React from 'react'
import ShopContext from './shopContext'
import ShowShopDetails from './showShopDetails'
import Navbar from './navbar'
import ThemeContext from './themeContext'
const ContextApp = () => {
    return (
        <div>
        <ShopContext>
        <ThemeContext>
        <Navbar/>
        <ShowShopDetails/>
        </ThemeContext>
        </ShopContext>
            
        </div>
    )
}

export default ContextApp
