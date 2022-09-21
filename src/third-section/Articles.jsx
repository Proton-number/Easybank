import React from 'react'
import './articles.css'
import currency from '/src/images/image-currency.jpg'
import restaurant from '/src/images/image-restaurant.jpg'
import plane from '/src/images/image-plane.jpg'
import confetti from '/src/images/image-confetti.jpg'
import { motion } from 'framer-motion'

const animationVariant = {
  hover:{
  backgroundColor:'rgb(23, 23, 23)',
  color:'white'
  }
}


function Articles() {
  return (
   <>
      <motion.div 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1}}
      className='articles'>

      <h1>Latest Articles</h1>
    
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
     className="article">
       
     <div  className="receive">
      <img src={currency} alt="image of currency notes" />
     <motion.div 
     variants={animationVariant}
     whileHover='hover'
     className="read">
     <h5>By Clair Robinson</h5>
      <h2>Receive money in any currency with no fees</h2>
      <p>The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single...</p>
     </motion.div>
     </div>

     <div className="treat-yourself">
      <img src={restaurant} alt="image of currency notes" />
    <motion.div
     variants={animationVariant}
     whileHover='hover'
     className="read">
    <h5>By Wilson Hutton</h5>
      <h2>Treat yourself without worrying about money</h2>
      <p>Our simple budgeting feature allows you to separate out your spendingand set realistic limits each month. That means you...</p>
    </motion.div>
     </div>

     <div className="wherever">
      <img src={plane} alt="image of currency notes" />
     <motion.div 
     variants={animationVariant}
     whileHover='hover'
     className="read">
     <h5>By Wilson Hutton</h5>
      <h2>Take your Easybank card wherever you go</h2>
      <p>We want you to enjoy travels. This is why we don't charge any fees on purchases while you're abroad.We'll even show you... </p>
     </motion.div>
     </div>

     <div className="invite-only">
      <img src={confetti} alt="image of currency notes" />
    <motion.div
    variants={animationVariant}
    whileHover='hover'
     className="read">
    <h5>By Clair Robinson</h5>
      <h2>Our invite-only Beta accounts are now live!</h2>
      <p>After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site...</p>
    </motion.div>
     </div>
    </motion.div>


      </motion.div>
   </>
  )
}

export default Articles
