import React from 'react';
import style from './ContactUs.module.css';

const ContactUs = () => {
  const handlePhoneClick = () => {
    window.location.href = 'tel:+12087031309';
  };

  return (
    <section className={`section ${style.section}`}>
      <div className='container'>
        <div className={style.wrapper}>
          <div className={style.text}>
            <img src='/images/logo.png' alt='aztecdesign' className={style.logo} />
            <h3>Upgrade your home with a new asphalt shingle roof!</h3>
            <h4 onClick={handlePhoneClick} className={style.phone} style={{ cursor: 'pointer' }}>
              (208) 703-1309
            </h4>
          </div>
          <div className={style.image}>
            <img src='/images/home_02-1.png' alt='person' className={style.person} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
