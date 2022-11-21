import React from 'react'
import { AiFillStar } from 'react-icons/ai';
import styles from '../Styles/testimonialCard.module.css';


export const TestimonialCard=({props})=> {
  return (
    <div className={styles.mycard}>
      <div className={styles.userDetails}>

        <div className={styles.userName_Image}>
          <img src={props.user} alt='' />
          <div className={styles.userName}>
            <h3>{props.userName}</h3>
            <p>{props.userLocation}</p>
          </div>
        </div>
        <div className={styles.review}>
               <p className={styles.reviewPoints}>4.5</p>
               <AiFillStar className={styles.reviewStar} />
        </div>
      </div>
      <div className={styles.userComments}>
        <p>{props.userComment}</p>
      </div>
    </div>
  )
}