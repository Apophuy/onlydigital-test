import { CSSProperties, FC, useEffect, useMemo, useRef, useState } from 'react';
// import { useWindowSize } from '../../utils/hooks';
import styles from './styles.module.scss';
import Title from '../Title';
import Interval from '../Interval';
import { gsap } from 'gsap';
import { currentRotation } from '../../utils';
import { dataLength, testData } from '../../utils/data';
import IntervalControl from '../IntervalControl';
import Slider from '../Slider';
import { useWindowSize } from '../../utils/hooks';
import Dots from '../Dots';
import { fields2Ru } from '../../utils/constants';

const Calendar: FC = () => {
  const { isMobile } = useWindowSize();
  const [currentIntervalIdx, setCurrentIntervalIdx] = useState(0);
  const [showTitle, setShowTitle] = useState(true);

  const currentInterval = useMemo(() => {
    return testData[currentIntervalIdx];
  }, [currentIntervalIdx]);

  const dotRefs = useRef<Record<number, HTMLSpanElement>>({});
  const dotsRef = useRef<HTMLDivElement>(null);

  let timeout: NodeJS.Timeout;

  const tl = gsap.timeline({
    onStart: () => setShowTitle(false),
    onComplete: () => {
      timeout = setTimeout(() => setShowTitle(true), 1000);
    },
  });

  const handleClick = (dotNumber: number) => {
    !isMobile &&
      tl.to(dotsRef.current, {
        rotationZ: currentRotation(dotNumber, 'round'),
        duration: 1,
        ease: 'power1.inOut',
      });
    !isMobile &&
      Object.entries(dotRefs.current).forEach(([key, dot]) => {
        gsap.to(dot, {
          rotationZ: currentRotation(dotNumber, 'text', Number(key)),
        });
      });
    setCurrentIntervalIdx(dotNumber - 1);
  };

  useEffect(() => {
    return () => {
      setCurrentIntervalIdx(0);
      tl.set(dotsRef.current, { clearProps: 'all' });
      Object.values(dotRefs.current).forEach((dot) => {
        gsap.set(dot, {
          clearProps: 'all',
        });
      });
      clearTimeout(timeout);
    };
  }, [isMobile]);

  const handleControlClick = (dir: 'left' | 'right') => {
    if (dir === 'left' && currentIntervalIdx === 0) {
      handleClick(dataLength);
    } else if (dir === 'left') {
      handleClick(currentIntervalIdx);
    } else if (dir === 'right' && currentIntervalIdx === dataLength - 1) {
      handleClick(1);
    } else if (dir === 'right') {
      handleClick(currentIntervalIdx + 2);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.calendar}>
        <div className={styles.leftTop}>
          <Title />
          <Interval data={currentInterval} />
          {isMobile && <h3>{fields2Ru[currentInterval.field]}</h3>}
        </div>
        <div className={styles.rightTop} />
        <div className={styles.leftBottom}>
          <Dots
            dotsRef={dotsRef}
            handleClick={handleClick}
            currentIntervalIdx={currentIntervalIdx}
            dotRefs={dotRefs}
            isMobile={isMobile}
            data={testData}
            showTitle={showTitle}
          />
          <Slider events={currentInterval.events} isMobile={isMobile} />
          <IntervalControl
            currentIntervalIdx={currentIntervalIdx}
            handleClick={handleControlClick}
          />
        </div>
        <div className={styles.rightBottom} />
      </div>
    </div>
  );
};

export default Calendar;
