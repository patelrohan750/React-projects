import React, { useState,useEffect } from 'react'
import { motion } from 'framer-motion'
const Order = ({ pizza,setShowModel }) => {
    useEffect(() => {
       setTimeout(()=>{
        setShowModel(true)
       },5000)
    }, [setShowModel])
    const containerVariants = {
        hidden: {
            x: "100vw"
        },
        visible: {
            x: 0,
            transition: {
                type: 'spring',
                delay: 0.5,
                when: 'beforeChildren',
                staggerChildren: 0.4
            }
        }
    }
    const childVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1
        }
    }
    return (
        <motion.div className="container order"
            variants={containerVariants} initial="hidden" animate="visible"
        >



            <h2>Thank you for your order :)</h2>




            <motion.p variants={childVariants}>You ordered a <strong>{pizza.base}</strong> pizza with:</motion.p>
            <motion.div variants={childVariants}>
                {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
            </motion.div>
        </motion.div>
    )
}

export default Order
