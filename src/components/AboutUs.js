import React from 'react';
import { FaCheckCircle, FaAward } from 'react-icons/fa'; // Example icons from react-icons
import style from './AboutUs.module.css';
import IntroVideo from '../partials/IntroVideo';
import Partners from './Partners';

const AboutUs = () => {
  return (
    <section className={`section`}>
      <div className='container'>
        <div className={style.wrapper}>
          <h2>
            Idaho’s Most Trusted Asphalt Shingle Roofing Company
          </h2>
          <p>
            We build the best asphalt shingle roofs in the country and we back that claim with an industry-best warranty of <span>fifty</span> years. With operations in over <span>3 locations</span> around the US, we are always prepared to reach you with the very best quality <span>wherever you are</span>. And you don't have to take our word for it. We have over <span>10,000 five-star coated asphalt shingle roofing reviews</span> from satisfied clients in various locations.
          </p>
          <p>
            If you want <span>tested and trusted</span>, you want us.
          </p>
          <Partners />
            <div className={`col-md-12  ${style.image}`}>
              <img src='./images/about.webp' />
            </div>
          {/* <IntroVideo videoFileName="vid6.mp4" hideOuterWrapper={true} /> */}
          </div>
          <div className={`row ${style.cards}`}>
            <div className='col col-md-4 col-xs-12'>
              <div className={style.iconWrapper}>
                <div className={style.innerWrapper}>

                    <span>
                    <svg width="1em" height="1em">
  <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
    <stop stopColor="#FD7B33" offset="0%" />
    <stop stopColor="#C41E3A" offset="100%" />
  </linearGradient>
  </svg>
                      <FaCheckCircle className={style.icon} style={{ fill: "url(#blue-gradient)"}} />
                    </span>
                    <span>
                      <h4>INDUSTRY-BEST</h4>
                      <p>Roofing Warranties</p>
                    </span>
                </div>
              </div>
            </div>
           
            <div className='col col-md-4 col-xs-12'>
              <div className={style.iconWrapper}>
                <div className={style.innerWrapper}>
                    <span>
                      <FaCheckCircle className={style.icon} style={{ fill: "url(#blue-gradient)"}} />
                    </span>
                    <span>
                      <h4>3 LOCATIONS</h4>
                      <p>Across Idaho</p>
                    </span>
                </div>
              </div>
            </div>

            <div className='col col-md-4 col-xs-12'>
              <div className={style.iconWrapper}>
                <div className={style.innerWrapper}>
                    <span>
                      <FaCheckCircle className={style.icon} style={{ fill: "url(#blue-gradient)"}} />
                    </span>
                    <span>
                      <h4>300+</h4>
                      <p>5-Star Reviews</p>
                    </span>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default AboutUs;
