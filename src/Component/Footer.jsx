import React from 'react';
import { FaFacebookF,FaInstagram,FaTwitter } from "react-icons/fa";
import styles from '../Styles/Footer.module.css';


export const Footer = () => {
    const iconStyle={
        backgroundColor: '#fff',
        width:'28px',
        height:'28px',
        padding:'4%',
        borderRadius:"50px"
    }
    
  return (
    <div className={styles.footer_big} >
    <div className={styles.footer_main} >
        <div className={styles.footer_first}>
            <div>
            <img src='https://laslesvpn-landing.netlify.app/images/logo.svg' alt='LaslesVPN'/>
             <div>
                <p>LaslesVPN is a private virtual network that has unique features and has high security.</p>
             </div>
             <div className={styles.socialDiv}>
            
                   <FaFacebookF style={iconStyle} />
                    <FaInstagram style={iconStyle}/>
                    <FaTwitter style={iconStyle}/>
             </div>
             <p>© 2020 LaslesVPN</p>
            </div>
        </div>
        <div className={styles.footer_second}>
            <div>
                <h4>Product</h4>
                <p>Download</p>
                <p>Pricing</p>
                <p>Location</p>
                <p>Server</p>
                <p>Countries</p>
                <p>Blog</p>
            </div>
            <div>
            <h4>Engage</h4>
                <p>LaslesVPN?</p>
                <p>FAQ</p>
                <p>Tutorials</p>
                <p>About Us</p>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
            </div>
            <div>
            <h4>Earn Money</h4>
                <p>Affiliate</p>
                <p>Become Partner</p>
            </div>
        </div>
    </div>
    </div>
  )
}
