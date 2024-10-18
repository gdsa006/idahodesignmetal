import React from 'react';
import style from './Ratings.module.css';
import RatingBox from '../partials/RatingBox';

const Ratings = () => {
  const ratings = [
    { rating: 'Rating', grade: '4.8', imgSrc: './images/facebook.3f26a1a4.svg' },
    { rating: 'Rating', grade: '4.9', imgSrc: './images/google.42f8472f.svg' },
  ];

  return (
    <section className={`section ${style.section}`}>
      <div className='container'>
        <div className={style.wrapper}>
          {ratings.map((data, index) => (
            <RatingBox key={index} rating={data.rating} grade={data.grade} imgSrc={data.imgSrc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ratings;
