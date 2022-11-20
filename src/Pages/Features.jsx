import React from 'react';
import styles from '../Styles/Features.module.css';
import img_tick from '../Assets/Group 1120.svg'
import img_girl2 from '../Assets/Illustration 2.svg';



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
          <img  src={img_girl2} alt='OUR WEBSITE FEATURES AUR HERE' />
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
                          {/* <AiFillCheckCircle style={{color:'green',fontSize:'8px'}}/> */}
                          <img src={img_tick} alt="logo" />
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
