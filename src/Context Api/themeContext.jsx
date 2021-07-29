import React,{createContext,useState} from 'react'
export const ThemeColorContext=createContext();
const ThemeContext = ({children}) => {
    const [customStyle,setCustomStyle]=useState({
        bgColor:"orange",
        textColor:"white"
    })
    return (
        <div>
            <ThemeColorContext.Provider value={{customStyle}}>
                {children}
            </ThemeColorContext.Provider>
        </div>
    )
}

export default ThemeContext
