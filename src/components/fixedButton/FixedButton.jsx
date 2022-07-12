import React from 'react';

import styles from './fixedButton.module.css';

const FixedButton = () => {
  return (
    <a
      href='https://link.yogig.com/tmcv21/AY2a'
      onClick={() => {
        window.opener = null;
        window.open('', '_self');
        window.close();
      }}
    >
      <img
        className={styles.fixedButton}
        src='/images/img_float.png'
        alt='event information'
      ></img>
    </a>
  );
};

export default FixedButton;
