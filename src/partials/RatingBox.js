import React from 'react';
import style from './RatingBox.module.css';

const RatingBox = ({ rating, grade, imgSrc }) => {
  return (
    <div className={style.box}>
      <span>{rating}</span>
      <span>{grade}</span>
      <span><img src={imgSrc} alt={`${rating} logo`} /></span>
    </div>
  );
};

export default RatingBox;
