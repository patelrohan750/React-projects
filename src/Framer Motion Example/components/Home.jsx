import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Loader from './Loader'
const Home = () => {
  const containerVariants={
    hidden:{
      opacity:0
    },
    visible:{
      opacity:1,
      transition:{
        delay:1.2,
        duration:1.5
      }
    },
    exit:{
      x:"-100vw",
      transition:{
        ease:"easeInOut"
      }
    }
  }
  const buttonVariants={
    hover:{
      scale:1.1,
      textShadow:"0px 0px 8px rgb(255,255,255)",
      boxShadow:"0px 0px 8px rgb(255,255,255)",
      transition:{
        yoyo:Infinity
      }
    }
  }
    return (
        <motion.div className="home container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
       
        
        >
        <h2>
          Welcome to Pizza Hunt
        </h2>
        <Link to="/base">
          <motion.button className="piza_button"
          variants={buttonVariants}
          whileHover="hover"
          >
            Create Your Pizza
          </motion.button>
        </Link>
        <Loader/>
      </motion.div>
    )
}

export default Home
