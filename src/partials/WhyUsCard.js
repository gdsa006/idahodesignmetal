import React from 'react';
import style from './WhyUsCard.module.css';

const WhyUsCard = ({ card }) => {
  return (
    <div className={style.whyusCard}>
      <div className={style.video} style={{ backgroundImage: `url(${card.image})` }}>
        <video className={style.video} autoPlay loop muted playsInline>
          <source src={`/videos/${card.video}`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className={style.desc}>
        <div className={style.title}>
          <h3>{card.title}</h3>
        </div>
        <div className={style.text}>
          <p dangerouslySetInnerHTML={{ __html: card.text }} />
        </div>
      </div>
    </div>
  );
};

export default WhyUsCard;
