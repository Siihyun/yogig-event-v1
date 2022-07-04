import React, { useEffect } from 'react';
import styles from './kakaoShareButton.module.css';

const KakaoShareButton = ({ children }) => {
  useEffect(() => {
    if (window.Kakao) {
      const kakao = window.Kakao;

      if (!kakao.isInitialized()) {
        kakao.init('44b4985337943859cc7f4572bb47faad');
      }
    }
  }, []);

  const shareKakao = () => {
    window.Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: '하루 한 긱, 동네미션 릴레이 드랍 Event!',
        description:
          '하루에 100만원씩 7일간 700만원! 7월에 쏟아지는 일거리 드랍 Event에 참여해보세요!',
        imageUrl:
          'http://yogig-test.s3-website.ap-northeast-2.amazonaws.com/images/kakao_thumbnail.png',
        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href,
        },
      },
      buttons: [
        {
          title: '자세히 보기',
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
      ],
    });
  };

  return (
    <button className={styles.kakaoSharebutton} onClick={shareKakao}>
      {children}
    </button>
  );
};

export default KakaoShareButton;
