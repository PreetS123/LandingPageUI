import React from "react";
import styles from "../Styles/About.module.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import {BsMenuAppFill,BsFillPersonFill} from 'react-icons/bs';


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
        <img src="https://michaellegedza.github.io/LaslesVPN/assets/svg/intro-img.svg" alt="LaslesVPN" />
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
          <FaMapMarkerAlt className={styles.bottom_icon} />
        </div>
        <div>
          <h4>30+</h4>
          <p>Location</p>
        </div>
        </div>
          
        <div className={styles.bottom_one}>
        <div className={styles.bottom_icondiv}>
          <BsMenuAppFill className={styles.bottom_icon}/>
        </div>
        <div>
          <h4>50+</h4>
          <p>Servers</p>
        </div>
        </div>

        <div className={styles.bottom_one}>
        <div className={styles.bottom_icondiv}>
          <BsFillPersonFill className={styles.bottom_icon}/>
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