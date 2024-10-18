import React, { useState } from 'react';
import style from './Footer.module.css';
import Modal from '../elements/Modal';
import ReCAPTCHA from 'react-google-recaptcha';

const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('privacy');
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    message: '',
    website: '',
    'g-recaptcha-response': '',
    consent: false,
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  const openModal = (content) => (event) => {
    event.preventDefault();
    setModalContent(content);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleRecaptchaChange = (value) => {
    setFormData({ ...formData, 'g-recaptcha-response': value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');

    if (formData.website !== '') {
      setFormErrors({ website: 'Bot detected.' });
      setIsSubmitting(false);
      return;
    }

    if (!formData.consent) {
      setFormErrors({ consent: 'You must agree to the privacy policy.' });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        setFormErrors(data.errors);
        setIsSubmitting(false);
      } else {
        setFormErrors({});
        setFormData({
          fname: '',
          lname: '',
          email: '',
          message: '',
          website: '',
          'g-recaptcha-response': '',
          consent: false,
        });
        setSuccessMessage('Message sent successfully.');
        setIsSubmitting(false);

        // Show the notification
        setShowNotification(true);

        // Hide the notification after 3 seconds
        setTimeout(() => {
          setShowNotification(false);
        }, 3000);

        // Close the modal after successful submission
        closeModal();
      }
    } catch (error) {
      console.error('Error:', error);
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <footer className={`footer ${style.footer}`}>
        <div className='container'>
          <div className='row'>
            <div className='col col-md-6 col-xs-12'>
              <div className={style.wrapper}>
                <p>IdahoDesign@2024. All Rights Reserved.</p>
              </div>
            </div>
            <div className='col col-md-6 col-xs-12'>
              <div className={style.wrapper}>
                <ul>
                  <li>
                    <a href='#' onClick={openModal('privacy')}>
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href='#' onClick={openModal('contact')}>
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href='/sitemap.xml' target='_blank'>
                      Sitemap
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <Modal show={showModal} handleClose={closeModal}>
        {modalContent === 'privacy' ? (
          <>
            {/* Privacy policy content */}
          </>
        ) : (
          <form className={style.contactForm} onSubmit={handleSubmit}>
            <h2>Contact Us</h2>
            <div className={style.row}>
              <div className={style.formGroup}>
                <label htmlFor="fname">First Name:</label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  value={formData.fname}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={style.formGroup}>
                <label htmlFor="lname">Last Name:</label>
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  value={formData.lname}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className={style.formGroup}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={style.formGroup}>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <div className={style.formGroup}>
              <input
                type="text"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                style={{ display: 'none' }}
              />
            </div>
            <div className={style.formGroup}>
              <label htmlFor="consent" className={style.consent}>
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleInputChange}
                  required
                />
                I have read and agree to the <a href='#' style={{ display: 'contents' }} onClick={openModal('privacy')}> Privacy Policy</a> and consent to the collection and use of my information.
              </label>
            </div>
            <div className={style.formGroup}>
              <ReCAPTCHA
                sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                onChange={handleRecaptchaChange}
              />
            </div>
            <div className={style.formGroup}>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send'}
              </button>
            </div>
            {formErrors && (
              <div className={style.formErrors}>
                {Object.keys(formErrors).map((key) => (
                  <p key={key}>{formErrors[key]}</p>
                ))}
              </div>
            )}
            {successMessage && (
              <div className={style.successMessage}>
                <p>{successMessage}</p>
              </div>
            )}
          </form>
        )}
      </Modal>

      {showNotification && (
        <div className={style.notification}>
          Thank you for submitting. We will get back to you soon.
        </div>
      )}
    </>
  );
};

export default Footer;
