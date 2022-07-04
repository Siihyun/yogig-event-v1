import { useEffect } from 'react';

export const useBottomObserver = ({ target, onIntersect }) => {
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    };
    let observer;

    if (target && target.current) {
      observer = new IntersectionObserver(onIntersect, options);
      observer.observe(target.current);
    }
    return () => observer && observer.disconnect();
  }, [target, onIntersect]);
};
