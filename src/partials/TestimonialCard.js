import React, { useState } from 'react';
import style from './TestimonialCard.module.css';
import { FaStar } from 'react-icons/fa';

const TestimonialCard = ({ testimonial }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleText = (event) => {
    event.preventDefault(); 
    setShowMore(!showMore);
  };

  return (
    <div className={style.testimonialCard}>
      <div className={style.image} style={{ backgroundImage: `url(${testimonial.image})` }}>
        <div className={style.badge}>
          Verified Purchase
        </div>
      </div>
      <div className={style.desc}>
        <div className={style.name}>
          <div className={style.text}>
            <span>{testimonial.author.charAt(0)}</span> 
            <span>{testimonial.author}</span>
          </div>
          <div className={style.stars}>
          {[...Array(5)].map((star, index) => (
            <FaStar
              key={index}
              color={index < testimonial.rating ? 'gold' : 'lightgray'}
            />
          ))}
        </div>
        </div>
        
        <div className={style.review}>
        <p>
            {showMore || testimonial.text.length <= 70
              ? testimonial.text
              : `${testimonial.text.substring(0, 70)}...`}
               {testimonial.text.length > 70 && (
            <a href='#' style={{color: 'black', marginLeft: '4px', textDecoration: 'none'}} className={style.toggleButton} onClick={toggleText}>
              {showMore ? 'Show Less' : 'Show More'}
            </a>
          )}
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
