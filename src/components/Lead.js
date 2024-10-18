import React from 'react';
import { FaAngleDoubleDown, FaArrowDown } from 'react-icons/fa';
import style from './Lead.module.css';
import LeadCapture from '../partials/LeadCapture';
import { FaArrowDown19 } from 'react-icons/fa6';

const Lead = () => {
  return (
    <section className={`section ${style.section}`}>
      <div className='container'>
        <div className={style.wrapper}>
          <h2>
          Discover your <span>savings</span> with a new coated Asphalt Shingle roof <span>today</span>.
          </h2>
          <FaAngleDoubleDown className={style.arrow} style={{ fill: "url(#blue-gradient)"}} />
          <LeadCapture />
        </div>
      </div>
    </section>
  );
};

export default Lead;
