import React from 'react'
import { Link } from 'react-router-dom'
import { motion,AnimatePresence } from 'framer-motion'
const Model = ({showModel,setShowModel}) => {
    const backdropVariants={
        hidden:{
            opacity:0
        },
        visible:{
            opacity:1
        }
    }
    const modelVariants={
        hidden:{
            y:"-100vh",
            opacity:0
        },
        visible:{
            y:"200px",
            opacity:1,
            transition:{
                delay:0.5
            }
        }
    }
    return (
        <AnimatePresence exitBeforeEnter>
            {
                showModel &&(
                    <motion.div
                    variants={backdropVariants}
                    initial="hidden"
                    animate="visible"
                    className="backdrop"
                    exit="hidden"
                    >
                        <motion.div className="model"
                        variants={modelVariants}
                        >
                        <p>  want to make another 🍕 Pizza?</p>
                        <Link to="/">
                            <button className="piza_button">Start Again</button>
                        </Link>

                        </motion.div>
                    </motion.div>
                )
            }
        </AnimatePresence>
    )
}

export default Model
