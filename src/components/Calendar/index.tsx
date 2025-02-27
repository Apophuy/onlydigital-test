import { CSSProperties, FC, useMemo, useRef, useState } from 'react';
// import { useWindowSize } from '../../utils/hooks';
import styles from './styles.module.scss';
import Title from '../Title';
import Interval from '../Interval';
import { gsap } from 'gsap';
import { currentRotation } from '../../utils';
import { dataLength, testData } from '../../utils/data';
import IntervalControl from '../IntervalControl';
import { fields2Ru } from '../../utils/constants';
import cn from 'classnames';
import Slider from '../Slider';
import { useWindowSize } from '../../utils/hooks';
import Dots from '../Dots';

const Calendar: FC = () => {
  const { isMobile } = useWindowSize();
  const [currentIntervalIdx, setCurrentIntervalIdx] = useState(0);

  const currentInterval = useMemo(() => {
    return testData[currentIntervalIdx];
  }, [currentIntervalIdx]);

  const dotRefs = useRef<Record<number, null | HTMLSpanElement>>({});
  const dotsRef = useRef<HTMLDivElement | null>(null);

  const handleClick = (dotNumber: number) => {
    !isMobile &&
      gsap.to(dotsRef.current, {
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
