import React, { useContext } from 'react'
import { ShopDetailsContext } from './shopContext';
import {ThemeColorContext} from './themeContext';
const ShowShopDetails = () => {
    const data = useContext(ShopDetailsContext)
    console.log(data)
    const themeData=useContext(ThemeColorContext);
    console.log(themeData)
    const {customStyle}=themeData
    return (
        <div className="container"  style={{backgroundColor:customStyle.bgColor,color:themeData.textColor}}>
            <h1 className="text-center mb-4">Products Lists</h1>
            {
                data.products.map(item => {
                    return (
                       
                        <ul className="list-group w-50 mb-5" key={item.id}>
                            <li className="list-group-item">Id: {item.id}</li>
                            <li className="list-group-item"> Name: {item.name}</li>
                            <li className="list-group-item">Price: {item.price}</li>
                           
                        </ul>
                      
                       
                    )
                })
            }
        </div>
    )
}

export default ShowShopDetails
