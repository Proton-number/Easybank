import React from 'react'
import './articles.css'
import currency from '/src/images/image-currency.jpg'
import restaurant from '/src/images/image-restaurant.jpg'
import plane from '/src/images/image-plane.jpg'
import confetti from '/src/images/image-confetti.jpg'

function Articles() {
  return (
   <>
      <div className='articles'>

      <h1>Latest Articles</h1>
    
    <div className="article">
       
     <div className="receive">
      <img src={currency} alt="image of currency notes" />
     <div className="read">
     <p>By Clair Robinson</p>
      <h2>Receive money in any currency with no fees</h2>
      <h4>The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single...</h4>
     </div>
     </div>

     <div className="treat-yourself">
      <img src={restaurant} alt="image of currency notes" />
    <div className="read">
    <p>By Wilson Hutton</p>
      <h2>Treat yourself without worrying about money</h2>
      <h4>Our simple budgeting feature allows you to separate out your spendingand set realistic limits each month. That means you...</h4>
    </div>
     </div>

     <div className="wherever">
      <img src={plane} alt="image of currency notes" />
     <div className="read">
     <p>By Wilson Hutton</p>
      <h2>Take your Easybank card wherever you go</h2>
      <h4>We want you to enjoy travels. This is why we don't charge any fees on purchases while you're abroad.We'll even show you... </h4>
     </div>
     </div>

     <div className="invite-only">
      <img src={confetti} alt="image of currency notes" />
    <div className="read">
    <p>By Clair Robinson</p>
      <h2>Our invite-only Beta accounts are now live!</h2>
      <h4>After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site...</h4>
    </div>
     </div>
    </div>


      </div>
   </>
  )
}

export default Articles
