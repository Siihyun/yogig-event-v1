import React, { useRef, useState } from 'react';
import { useBottomObserver } from '../../hooks/useObserver';
import FixedButton from '../fixedButton/FixedButton';

const Intersection = ({ children }) => {
  const [isShown, setIsShown] = useState(false);

  const observer = useRef(null);

  const onIntersect = ([entry]) => {
    if (entry.isIntersecting) setIsShown(true);
    else setIsShown(false);
  };

  useBottomObserver({ target: observer, onIntersect });

  return (
    <>
      <div ref={observer}>{children}</div>
      {isShown && <FixedButton />}
    </>
  );
};

export default Intersection;
