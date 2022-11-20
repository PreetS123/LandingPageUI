import React from 'react';
import { FaFacebookF,FaInstagram,FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <div>
        <div>
            <div>
            <img src='https://laslesvpn-landing.netlify.app/images/logo.svg' alt='LaslesVPN'/>
             <div>
                <p>LaslesVPN is a private virtual network that has unique features and has high security.</p>
             </div>
             <div>
                <div>
                   <FaFacebookF/>
                </div>
                <div>
                    <FaInstagram/>
                </div>
                <div>
                    <FaTwitter/>
                </div>
             </div>
             <p>© 2020 LaslesVPN</p>
            </div>
        </div>
        <div>
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
  )
}
