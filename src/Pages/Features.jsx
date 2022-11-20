import React from 'react';
import {AiFillCheckCircle} from 'react-icons/ai';
import styles from '../Styles/Features.module.css';

export const Features = () => {

  const features=[
    {
      id:1,
      content:'Powerfull online protection.'
    },
    {
      id:2,
      content:'Internet without borders.'
    },
    {
      id:3,
      content:'Supercharged VPN'
    },
    {
      id:4,
      content:'No specific time limits.'
    }
  ]
  return (
    <>
       <div className={styles.features_main}>
        <div className={styles.features_imgbx}>
          <img  src='https://laslesvpn-landing.netlify.app/images/illustration-2.svg' alt='OUR WEBSITE FEATURES AUR HERE' />
        </div>
        <div className={styles.features_second}>
          <h2>We Provide Many
             Features You Can Use</h2>
             <p>You can explore the features that we provide with fun and have their own functions each feature.</p>

             <div>
              {
                features.map(item=>{
                  return (
                    <div key={item.id} className={styles.features_content}>
                          <AiFillCheckCircle style={{color:'green',fontSize:'8px'}}/>
                          <p>{item.content}</p>
                    </div>
                  )
                })
              }
             </div>
        </div>
       </div>
    </>
  )
}
