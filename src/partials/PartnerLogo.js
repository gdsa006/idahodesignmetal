import React from 'react';
import style from './PartnerLogo.module.css';

const PartnerLogo = ({ src, alt }) => {
  return (
    <div className={style.logo}>
      <span><img src={src} alt={alt} /></span>
    </div>
  );
};

export default PartnerLogo;
