import React from "react";
import styles from "../Styles/About.module.css";

export const About = () => {
  return (
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
  );
};
