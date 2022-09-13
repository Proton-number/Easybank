import React from 'react'
import './Navigation.css'
import close from '/src/images/icon-close.svg'

function Navigation({setDisplay}) {
  return (
   <>
    <div className='nav'>
    <div className="main">
      <h1>Menu</h1>
    <img src={close} onClick={()=> setDisplay(false)} alt="" />
    </div>
   
        <div className="navigation">
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
        <p>Blog</p>
        <p>Careers</p>
        </div>
      

    
 
    </div>
   </>
  )
}

export default Navigation
