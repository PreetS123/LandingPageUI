import React from 'react';
import { TestimonialCard } from '../Component/TestimonialCard';
import styles from '../Styles/Testmonial.module.css';
import user1 from '../Assets/Ellipse 175 (1).png';
import user2 from '../Assets/Ellipse 175 (2).png';
import user3 from '../Assets/Ellipse 175.png';
import { FaArrowRight,FaArrowLeft } from "react-icons/fa";


const testimonialUser=[
  {
    id:1,
    user:user1,
    userComment:`Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.`,
    userName:"Viezh Robert",
    userLocation:"Warsaw,Polland"
  },
  {
    id:2,
    user:user2,
    userComment:`I like it because I like to travel far and still can connect with high speed.`,
    userName:"Yessica Christy",
    userLocation:"Shanxi,China"
  },
  {
    id:3,
    user:user3,
    userComment:`This is very unusual for my business that currently requires a virtual private network that has high security.`,
    userName:"Kim Young Jou",
    userLocation:"Seoul, South Korea"
  },
  {
    id:4,
    user:user1,
    userComment:`Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.`,
    userName:"Viezh Robert",
    userLocation:"Warsaw,Polland"
  },
  {
    id:5,
    user:user2,
    userComment:`I like it because I like to travel far and still can connect with high speed.`,
    userName:"Yessica Christy",
    userLocation:"Shanxi,China"
  },
  {
    id:6,
    user:user3,
    userComment:`This is very unusual for my business that currently requires a virtual private network that has high security.`,
    userName:"Kim Young Jou",
    userLocation:"Seoul, South Korea"
  },
  {
    id:7,
    user:user1,
    userComment:`Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.`,
    userName:"Viezh Robert",
    userLocation:"Warsaw,Polland"
  },
  {
    id:8,
    user:user2,
    userComment:`I like it because I like to travel far and still can connect with high speed.`,
    userName:"Yessica Christy",
    userLocation:"Shanxi,China"
  },
  {
    id:9,
    user:user3,
    userComment:`This is very unusual for my business that currently requires a virtual private network that has high security.`,
    userName:"Kim Young Jou",
    userLocation:"Seoul, South Korea"
  },
  {
    id:10,
    user:user1,
    userComment:`Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.`,
    userName:"Viezh Robert",
    userLocation:"Warsaw,Polland"
  },
  {
    id:11,
    user:user2,
    userComment:`I like it because I like to travel far and still can connect with high speed.`,
    userName:"Yessica Christy",
    userLocation:"Shanxi,China"
  },
  {
    id:12,
    user:user3,
    userComment:`This is very unusual for my business that currently requires a virtual private network that has high security.`,
    userName:"Kim Young Jou",
    userLocation:"Seoul, South Korea"
  }
  
]

export const Testimonial = () => {

  // let box= document.getElementById('product_container');


  const btnPrev=()=>{
    let box= document.getElementById('product_container');

      let width= box.clientWidth;
      box.scrollLeft=box.scrollLeft-width/1;
      console.log(width)
  }
  const btnNext=()=>{
    let box= document.getElementById('product_container');

    let width= box.clientWidth;
    box.scrollLeft=box.scrollLeft+width/1;
    console.log(width)
  }

  return (
    <div className={styles.test_main}>
      <div className={styles.test_head}>
       <div> 
        <h2>Huge Global Network of Fast VPN</h2>
       </div>
       <div>
        <p>These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p>
       </div>
      </div>

     {/* carousel part starts from here */}
    <div className={styles.test_carousel}>
         <div className={styles.product_cont} id='product_container'>
          {
            testimonialUser?.map(item=>(
              <TestimonialCard key={item.id} props={item}  />
            ))
          }
         </div>
    </div>
    {/* carousel button div */}
    <div className={styles.test_btn}>
      <button className={styles.pre_btn}  onClick={btnPrev} >
        <FaArrowRight className={styles.arrow}/>
      </button>
      <button className={styles.nxt_btn} onClick={btnNext} >
      <FaArrowLeft  className={styles.arrow}/>
      </button>
    </div>
    </div>
  )
}
