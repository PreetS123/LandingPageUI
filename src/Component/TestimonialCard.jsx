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
          <div className={styles.reviewPoints}>
            <p>4.5</p>
          </div>
          <div className={styles.reviewStar}>
            <AiFillStar />
          </div>
        </div>
      </div>
      <div className={styles.userComments}>
        <p>{props.userComment}</p>
      </div>
    </div>
  )
}