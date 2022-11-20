import React from 'react';
import { About } from './Pages/About';
import { Features } from './Pages/Features';
import { Pricing } from './Pages/Pricing';
import img_map from './Assets/Huge Global.svg';
import styles from './Styles/Landing.module.css';
import img_netflix from './Assets/Mask Group (1).svg';
import img_reddit from './Assets/Mask Group (2).svg';
import img_amazon from './Assets/Mask Group (2).svg';
import img_discord from './Assets/Mask Group (3).svg';
import img_spotify from './Assets/Mask Group (4).svg';


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
       <OurPatners />
     </div>
    </>
  )
}

const OurPatners=()=>{
  return (
    <>
   <div>
      <img src={img_netflix} alt="" />
      <img src={img_reddit} alt="" />
      <img src={img_amazon} alt="" />
      <img src={img_discord} alt="" />
      <img src={img_spotify} alt="" />
   </div>
    </>
  )
}
