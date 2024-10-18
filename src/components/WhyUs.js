import React from 'react';
import style from './WhyUs.module.css';
import WhyUsCard from '../partials/WhyUsCard';

const cards = [
  {
      id: 1,
      video: "../videos/Save.mp4",
      text: "With superb heat reflection for the summer and thermal resistance for the winter, asphalt shingle roofs can reduce your energy cost by up to 40%. You can <span>save thousands</span> with a coated roof.",
      title: "Save thousands on the energy bill",
  },
  {
      id: 2,
      video: "../videos/Virtually.mp4",
      text: "We all need a friend to be with us through life's storms, and you can count on your asphalt shingle roof. Whether it's rain or hail, your asphalt shingle roof is designed with a special installation system that reduces the noise to almost total silence. No other roof comes close.",
      title: "Nice and quiet during rain or hail",
  },
  {
      id: 3,
      video: "../videos/Fire.h.265",
      text: "You can rest easy knowing you have the <span>safest possible</span> roof over your head if there's ever a fire. Be it an electrical malfunction or a lightning strike, it doesn't get any safer than a asphalt shingle roof.",
      title: "Feel safe with a Class A fire rating",
  },
  {
      id: 4,
      video: "../videos/Zero-Impact.mp4",
      text: "Asphalt Shingle roof critics say that a asphalt shingle roofing will interfere with your signal reception. We're here to tell you that there's absolutely nothing to worry about. Coated asphalt shingle roofs are super lightweight and have <span>zero impact</span> on signal reception. You can quote us on that.",
      title: "Enjoy a strong communication channel",
  }
];


const WhyUs = () => {
  return (
    <section className={`section ${style.section}`}>
      <div className='container'>
        <div className={style.wrapper}>
          <h2>
            Why Asphalt Shingle Roofs Offer The Best Value On The Market
          </h2>
        {cards.map(card => (
          <WhyUsCard card={card}/>
        ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
