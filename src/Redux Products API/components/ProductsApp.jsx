import React from 'react'
import { Provider } from 'react-redux'
import store from '../redux/store'
import Header from './Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProductDetails from './ProductDetails'
import ProductsLists from './ProductsLists'
import './product.css'
const ProductsApp = () => {
    return (
        <Provider store={store}>
            <Router>
            <Header />
                <Switch>
                    <Route exact path='/' component={ProductsLists} />
                    <Route exact path='/product/:id' component={ProductDetails} />

                </Switch>
               
            </Router>
        </Provider>
    )
}

export default ProductsApp
