import React from 'react'
import './middle.css'
import online from '/src/images/icon-online.svg'
import onboarding from '/src/images/icon-onboarding.svg'
import api from '/src/images/icon-api.svg'
import budgeting from '/src/images/icon-budgeting.svg'

function Middle() {
  return (
   <>
    <div className='middle'>
      
      <div className="heading">
        <h1>Why choose Easybank?</h1>
        <p>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
      </div>

     <div className="reasons">
     <div className="online-banking">
        <img src={online} alt="online logo" />
        <h2>Online Banking</h2>
        <p>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
      </div>

      <div className="simple-budgeting">
        <img src={budgeting} alt="simple budgetting logo"/>
        <h2>Simple Budgeting</h2>
        <p>See exactly where your money goes each month,Receive notifications when you're close to your hitting limits.</p>
      </div>

      <div className="fast-onboarding">
        <img src={onboarding} alt= 'onboard logo' />
        <h2>Fast Onboarding</h2>
        <p>We don't do branches. Open your account in minutes online and start taking control of your finances right away.</p>
        </div>

      <div className='api'>
        <img src={api} alt="api logo" />
        <h2>Open API</h2>
        <p>Manage your savings, investments, pension, and much more from one account.Tracking your money has never been easier.</p>
        </div>
     </div>

      </div>
   </>
  )
}

export default Middle
