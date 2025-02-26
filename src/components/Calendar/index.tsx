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

const Calendar: FC = () => {
  // const { isMobile } = useWindowSize();
  const [currentIntervalIdx, setCurrentIntervalIdx] = useState(0);

  const currentInterval = useMemo(() => {
    return testData[currentIntervalIdx];
  }, [currentIntervalIdx]);

  const dotRefs = useRef<Record<number, null | HTMLSpanElement>>({});
  const dotsRef = useRef<HTMLDivElement | null>(null);

  const handleClick = (dotNumber: number) => {
    gsap.to(dotsRef.current, {
      rotationZ: currentRotation(dotNumber, 'round'),
      duration: 1,
      ease: 'power1.inOut',
    });
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
          <div className={styles.round}>
            <div className={styles.dots} ref={dotsRef}>
              {testData.map((interval) => (
                <div
                  key={`interval-${interval.id}`}
                  className={cn(styles.dot, {
                    [styles.dot__active]: interval.id - 1 === currentIntervalIdx,
                  })}
                  onClick={() => handleClick(interval.id)}
                >
                  <div className={styles.dot__inner}>
                    <span
                      className={styles.dot__number}
                      ref={(el) => {
                        dotRefs.current[interval.id] = el;
                      }}
                    >
                      {interval.id}
                    </span>
                  </div>
                  {interval.id - 1 === currentIntervalIdx && (
                    <div className={styles.dot__field}>
                      <span className={styles.dot__text}>{fields2Ru[interval.field]}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.rightBottom} />
        <div className={styles.slider}></div>
        <IntervalControl currentIntervalIdx={currentIntervalIdx} handleClick={handleControlClick} />
      </div>
    </div>
  );
};

export default Calendar;
