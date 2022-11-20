import React from 'react';
import { About } from './Pages/About';
import { Features } from './Pages/Features';
import { Pricing } from './Pages/Pricing';
import img_map from './Assets/Huge Global.svg';
import styles from './Styles/Landing.module.css';

export const Landing = () => {
  return (
    <>
     <About />
     <Features/>
      <Pricing/>
      <GlobalNetwork   />
    </>
  )
}


const GlobalNetwork=()=>{

  return(
    <>
     <div className={styles.global_main} >
      <div className={styles.global_first} >
       <div>
        <h1>Huge Global Network of fast VPN</h1>
       </div>
       <div>
        <p>See <span>LaslesVPN</span> everywhere to make it easier for you when you move locations.</p>
       </div>
       </div>
       <div className={styles.mapimg} >
           <img src={img_map} alt="" />
       </div>
     </div>
    </>
  )
}
