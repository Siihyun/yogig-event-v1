import React from 'react';

import styles from './fixedButton.module.css';

const FixedButton = () => {
  return (
    <div
      onClick={() => {
        window.opener = null;
        window.open('', '_self');
        window.close();
      }}
    >
      <a href='https://link.yogig.com/tmcv21/AY2a'>
        <img
          className={styles.fixedButton}
          src='/images/img_float.png'
          alt='event information'
        ></img>
      </a>
    </div>
  );
};

export default FixedButton;
