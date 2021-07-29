import React,{useState} from 'react'
import { BrowserRouter as Router,Switch,Route,useLocation } from 'react-router-dom'
import Home from './components/Home'
import Base from './components/Base'
import Order from './components/Order'
import Header from './components/Header'
import Toppings from './components/Toppings'
import './FramerExampleApp.css'
import { AnimatePresence } from 'framer-motion'
import Model from './components/Model'
const FramerExampleApp = () => {
    let location=useLocation();
    const [showModel,setShowModel]=useState(false)
    const [pizza, setPizza] = useState({
        base:"",
        toppings: []
    })
    const addBase=(base)=>{
        console.log("base: ",base);
        setPizza({
            ...pizza,
            base
        })

    }
    const addTopping=(topping)=>{
        console.log("topping: ",topping);
        let newToppings;
        if(!pizza.toppings.includes(topping)){
            newToppings=[...pizza.toppings,topping]
        }else{
            newToppings=pizza.toppings.filter(item=>item!==topping);
        }
        console.log("new topping: ",newToppings);
        setPizza({
            ...pizza,
            toppings:newToppings
        })
    }
    return (
        <div className="motionExampleApp">
            <Model showModel={showModel} setShowModel={setShowModel}/>
            <Header/>
            <AnimatePresence exitBeforeEnter onExitComplete={()=>setShowModel(false)}>
            <Switch location={location} key={location.key}>
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route path='/base'>
                    <Base addBase={addBase} pizza={pizza}/>
                </Route>
                <Route path='/toppings'>
                    <Toppings addTopping={addTopping} pizza={pizza}/>
                </Route>
                <Route path='/order'>
                    <Order pizza={pizza} setShowModel={setShowModel}/>
                </Route>
            </Switch>
            </AnimatePresence>
      
            
        </div>
    )
}

export default FramerExampleApp

