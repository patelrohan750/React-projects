import React,{createContext,useState} from 'react'
export const ShopDetailsContext=createContext();
const ShopContext = ({children}) => {
    const [products,setProducts]=useState([
        {id:1,name:"Laptop",price:2000},
        {id:2,name:"Watch",price:8000},
        {id:3,name:"Mobile",price:1000},
        {id:4,name:"T-shirt",price:3000},
        {id:5,name:"Headphone",price:6000}
    ])
    const doSomething=()=>{
        console.log("do Somthing");
    }
    return (
        <div>
            <ShopDetailsContext.Provider value={{products,do:doSomething}}>
                {children}
            </ShopDetailsContext.Provider>
        </div>
    )
}

export default ShopContext
