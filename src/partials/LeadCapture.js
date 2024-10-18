// src/components/LeadCapture.js
import React from 'react';
import style from './LeadCapture.module.css';

const LeadCapture = () => {
  return (
    <div className={style.leadCapture}>
      <iframe
        title="Lead Capture Form"
        src="https://app.roofr.com/instant-estimator/f3e02e7d-0414-4765-b4d7-53c592b527f1/AZTECConstructionServicesLLC"
        width="100%"
        height="600"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default LeadCapture;
