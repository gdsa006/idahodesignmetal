import React from 'react';
import style from './Hero.module.css';
import IntroVideo from '../partials/IntroVideo';
import Location from './Location';
const Hero = () => {
  return (
   <section className={`section ${style.section}`}>
        <div className='container'>

            <div className={style.wrapper}>
                <h1>
                    Get a <span>Asphalt Shingle</span> roof from a Top Idaho Company for the best price and the least hassle.
                </h1>
                {/* <h5>
                    Available for homeowners in <Location />, Idaho, and more…
                </h5> */}
              
                <IntroVideo videoFileName="istockphoto-1310168414-640_adpp_is.mp4" hideOuterWrapper={false} />
               
            </div>

        </div>
   </section>
  );
};

export default Hero;
