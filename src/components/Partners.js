import React from 'react';
import style from './Partners.module.css';
import PartnerLogo from '../partials/PartnerLogo';

const Partners = () => {
  const logos = [
    './images/ICONS-02.png',
    './images/ICONS-05.png',
    './images/ICONS-06.png',
    './images/ICONS-07.png'
  ];

  return (
    <section className={`section ${style.section}`}>
      <div className='container'>
        <div className={style.wrapper}>
          {logos.map((src, index) => (
            <PartnerLogo key={index} src={src} alt={`Logo ${index + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
