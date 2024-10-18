import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import style from './Testimonials.module.css';
import TestimonialCard from '../partials/TestimonialCard';

const testimonials = [
  {
    id: 1,
    image: "../images/Asphalt1.webp",
    text: "They were incredibly friendly and fast. And they did an amazing",
    author: "Ashley Cliff",
    rating: "5"
  },
  {
    id: 2,
    image: "./images/Asphalt2.webp",
    text: "The owner of the company is absolutely AMAZING! The customer is their #1 priority and providing you with the best possible product they can.",
    author: "Jane Smith",
    rating: "5"
  },
  {
    id: 3,
    image: "./images/Asphalt3.webp",
    text: "I had a unique situation and laid it out to them and without hesitation they jumped through the various hoops to make me as happy as possible. Great company!",
    author: "Amanda Canoy",
    rating: "5"
  },
  {
    id: 4,
    image: "./images/Asphalt4.webp",
    text: "Great installation crew was at my house at 7:30AM and the roof was complete by 2PM. Good coordination of supplies, labor and cleanup!",
    author: "Derek Lemon",
    rating: "5"
  },
  {
    id: 5,
    image: "./images/Asphalt5.webp",
    text: "These guys worked with us and were super easy going. Augustine and his crew went above and beyond. He is a man of his word. Our roof looks INCREDIBLE THANK YOU!",
    author: "Wayne & Tami",
    rating: "5"
  },
];

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${style.nextArrow}`}
      onClick={onClick}
    >
      &#9654;
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${style.prevArrow}`}
      onClick={onClick}
    >
      &#9664;
    </div>
  );
};

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    draggable: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section className={`section ${style.section}`}>
      <div className='container'>
          <div className={style.wrapper}>
            <h2>
              See What Our Customers Say
            </h2>
            <p>
            We won't take it to heart if you don't take our word for it. Read these <span>asphalt shingle roofing</span> reviews to see what people have to say about us.
            </p>
          </div>

          <Slider {...settings} className={style.slider}>
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className={style.testimonialWrapper}>
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </Slider>
      </div>        
    </section>
  );
};

export default Testimonials;
