import React from "react";
import styles from "../Styles/About.module.css";
import img_location from '../Assets/Group 1215.svg';
import img_person from '../Assets/Group 1216.svg';
import img_service from '../Assets/Group 1217.svg';
import img_girl from '../Assets/Illustration 1.svg';


export const About = () => {
  return (
    <>
    <div className={styles.about_main}>
      <div className={styles.about}>
        <div>
          <h2>
            Want anything to be
             easy with <span>LaslesVPN.</span>
          </h2>
        </div>
        <div>
          <p>
            Provide a network for all your needs with ease and fun using{" "}
            <span>LaslesVPN</span> discover interesting features from us.
          </p>
        </div>
        <div className={styles.getStarted} >
          <button >Get Started</button>
        </div>
      </div>

      <div className={styles.imgdiv}>
        <img src={img_girl} alt="LaslesVPN" />
      </div>
    </div>

    <AboutBottom/>
    </>
  );
};



   const AboutBottom=()=>{
    return(
      <>
      <div className={styles.bottom_main}>
        <div className={styles.bottom_one}>
        <div className={styles.bottom_icondiv}>
        
          <img src={img_location} alt="LOCATION" />
        </div>
        <div>
          <h4>30+</h4>
          <p>Location</p>
        </div>
        </div>
          
        <div className={styles.bottom_one}>
        <div className={styles.bottom_icondiv}>
          
          <img src={img_service} alt="" />
        </div>
        <div>
          <h4>50+</h4>
          <p>Servers</p>
        </div>
        </div>

        <div className={styles.bottom_one}>
        <div className={styles.bottom_icondiv}>
          <img src={img_person} alt="" />
        </div>
        <div>
          <h4>90+</h4>
          <p>Users</p>
        </div>
        </div>


      </div>
      </>
    )
  }