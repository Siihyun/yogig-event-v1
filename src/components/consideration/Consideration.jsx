import React, { useState } from 'react';
import styles from './consideration.module.css';

const Consideration = () => {
  const [isOpen, setIsOpen] = useState(false);
  const path = isOpen ? '_open' : '';
  const handleimageClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <section className={styles.considerationSection}>
      <img
        className={styles.participateImage}
        src='/images/img_section06_00.png'
        alt='event information'
      ></img>

      <img
        className={styles.considerationImage}
        src={`/images/img_section06_01${path}.png`}
        alt='event information'
        onClick={handleimageClick}
      ></img>
    </section>
  );
};

export default Consideration;
