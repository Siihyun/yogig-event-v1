import React from 'react';
import styles from './content.module.css';

const Content = () => {
  return (
    <section className={styles.contentSection}>
      <img
        className={styles.informationImage}
        src='/images/img_section02.png'
        alt='event information'
      ></img>

      <a
        className={styles.linkPromotion}
        href='https://yogig.onelink.me/LZA8/02n96vt9'
      >
        100만원 미션 찾으러 가긱
      </a>
    </section>
  );
};

export default Content;
