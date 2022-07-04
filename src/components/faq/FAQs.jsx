import React, { useState } from 'react';
import styles from './faq.module.css';

const FAQs = () => {
  const [openState, setOpenState] = useState({
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
  });

  const onButtonClick = (number) => {
    if (openState[number] === '')
      setOpenState({ ...openState, [number]: '_open' });
    else setOpenState({ ...openState, [number]: '' });
  };

  return (
    <section className={styles.faqSection}>
      <div>
        <img src='/images/img_section05_00.png' alt='event information'></img>
      </div>
      <div
        className={styles.buttonWrapper}
        onClick={() => {
          onButtonClick(1);
        }}
      >
        <img
          src={`/images/img_section05_01${openState[1]}.png`}
          alt='event information'
        ></img>
      </div>

      <div
        className={styles.buttonWrapper}
        onClick={() => {
          onButtonClick(2);
        }}
      >
        <img
          src={`/images/img_section05_02${openState[2]}.png`}
          alt='event information'
        ></img>
      </div>

      <div
        className={styles.buttonWrapper}
        onClick={() => {
          onButtonClick(3);
        }}
      >
        <img
          src={`/images/img_section05_03${openState[3]}.png`}
          alt='event information'
        ></img>
      </div>

      <div
        className={styles.buttonWrapper}
        onClick={() => {
          onButtonClick(4);
        }}
      >
        <img
          src={`/images/img_section05_04${openState[4]}.png`}
          alt='event information'
        ></img>
      </div>

      <div
        className={styles.buttonWrapper}
        onClick={() => {
          onButtonClick(5);
        }}
      >
        <img
          src={`/images/img_section05_05${openState[5]}.png`}
          alt='event information'
        ></img>
      </div>

      <div
        className={styles.buttonWrapper}
        onClick={() => {
          onButtonClick(6);
        }}
      >
        <img
          src={`/images/img_section05_06${openState[6]}.png`}
          alt='event information'
        ></img>
      </div>

      <div className={styles.buttonWrapper}>
        <img src='/images/img_section05_07.png' alt='event information'></img>
      </div>
    </section>
  );
};

export default FAQs;
