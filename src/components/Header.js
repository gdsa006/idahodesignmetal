import React from 'react';
import style from './Header.module.css';
const Header = () => {
  return (
   <header className={`header ${style.header}`}>
        <div className='container'>
                <div className={style.wrapper}>
                    <img src='/images/logo.png' alt='aztecdesign' className={style.logo} />
                </div>
        </div>
   </header>
  );
};

export default Header;
