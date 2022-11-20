import React from 'react';
import styles from '../Styles/Pricing.module.css';
import { FaCheck } from "react-icons/fa";

export const Pricing = () => {
  return (
    <div style={{backgroundColor:'#F9F9F5',width:'100%',margin:'10px 0px'}}>
    <div className={styles.price_main}>
      <h2>Choose Your Plan</h2>
      <p className={styles.let}>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
      <div className={styles.price_div}>
        <PricingOneDiv1/>
        <PricingOneDiv2/>
        <PricingOneDiv3/>
      </div>
    </div>
    </div>
  )
}


const freeplan=[
  {
    id:1,
    plan:"Unlimited Bandwitch"
  },
  {
    id:2,
    plan:"Encrypted Connection"
  },
  {
    id:3,
    plan:"No Traffic Logs"
  },
  {
    id:4,
    plan:"Works on All Devices"
  }
]
const PricingOneDiv1=()=>{
  return (
    <>
    <div className={styles.price1}>
       <div>
        <img src="https://laslesvpn-landing.netlify.app/images/free-plan.svg" alt="Today Or Never" />
       </div>
       <div className={styles.plan}>
        <h2>Free Plan</h2>
          <div>
            {
              freeplan.map(item=>{
                return (
                  <div key={item.id} className={styles.offerdiv}>
                   <p> <FaCheck className={styles.tick}/></p>
                    <p>{item.plan}</p>
                  </div>
                )
              })
            }
          </div>
       </div>
       <div className={styles.price_last}>
        <h2>Free</h2>
        <div>
          <button>Select</button>
        </div>
       </div>
    </div>
    </>
  )
}



const standard=[
  {
    id:1,
    plan:"Unlimited Bandwitch"
  },
  {
    id:2,
    plan:"Encrypted Connection"
  },
  {
    id:3,
    plan:"Yes Traffic Logs"
  },
  {
    id:4,
    plan:"Works on All Devices"
  }
  ,
  {
    id:5,
    plan:"Connect Anywhere"
  }
]

const PricingOneDiv2=()=>{
  
  return (
    <>
    <div className={styles.price1}>
       <div>
        <img src="https://laslesvpn-landing.netlify.app/images/free-plan.svg" alt="Today Or Never" />
       </div>
       <div className={styles.plan}>
        <h2>Standard Plan</h2>
          <div>
            {
              standard.map(item=>{
                return (
                  <div key={item.id} className={styles.offerdiv} >
                    <p> <FaCheck className={styles.tick}/></p>
                    <p>{item.plan}</p>
                  </div>
                )
              })
            }
          </div>
       </div>
       <div className={styles.price_last}>
        <h2>$9<span>/ month</span></h2>
        <div>
          <button>Select</button>
        </div>
       </div>
    </div>
    </>
  )
}




const premium=[
  {
    id:1,
    plan:"Unlimited Bandwitch"
  },
  {
    id:2,
    plan:"Encrypted Connection"
  },
  {
    id:3,
    plan:"Yes Traffic Logs"
  },
  {
    id:4,
    plan:"Works on All Devices"
  }
  ,
  {
    id:5,
    plan:"Connect Anywhere"
  },
  {
    id:6,
    plan:"Get New Features"
  }
]

const PricingOneDiv3=()=>{
  return (
    <>
    <div className={styles.price1}>
       <div>
        <img src="https://laslesvpn-landing.netlify.app/images/free-plan.svg" alt="Today Or Never" />
       </div>
       <div className={styles.plan}>
        <h2>Premium Plan</h2>
          <div>
            {
              premium.map(item=>{
                return (
                  <div key={item.id} className={styles.offerdiv}>
                    <p> <FaCheck className={styles.tick}/></p>
                    <p>{item.plan}</p>
                  </div>
                )
              })
            }
          </div>
       </div>
       <div className={styles.price_last}>
        <h2>$12 <span>/ mo</span></h2>
        <div>
          <button>Select</button>
        </div>
       </div>
    </div>
    </>
  )
}
