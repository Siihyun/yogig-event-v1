import React from 'react';
import styles from './share.module.css';
import KakaoShareButton from '../KaKaoShareButton/KakaoShareButton';

const Share = () => {
  const url = window.location.href;

  const handleClipboardCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(url)
        .then(() => {
          alert('링크가 복사되었습니다. 붙여넣기를 이용하여 공유해보세요.');
        })
        .catch(() => {
          alert('복사를 다시 시도해주세요.');
        });
    } else {
      if (!document.queryCommandSupported('copy')) {
        return alert('복사하기가 지원되지 않는 브라우저입니다.');
      }

      const textarea = document.createElement('textarea');
      textarea.value = url;
      textarea.style.top = 0;
      textarea.style.left = 0;
      textarea.style.position = 'fixed';

      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      alert('링크가 복사되었습니다. 붙여넣기를 이용하여 공유해보세요.');
    }
  };

  return (
    <section className={styles.shareSection}>
      <img src='/images/img_section07.png' alt='event information'></img>
      <KakaoShareButton>카카오톡 공유하기</KakaoShareButton>
      <button className={styles.linkCopyButton} onClick={handleClipboardCopy}>
        링크 복사하기
      </button>
    </section>
  );
};

export default Share;
