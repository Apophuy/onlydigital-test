import { FC } from 'react';
import styles from './styles.module.scss';
import { TTestData } from '../../types';
import { fields2Ru } from '../../utils/constants';
import cn from 'classnames';

type Props = {
  dotsRef: React.RefObject<HTMLDivElement | null>;
  handleClick: (dotNumber: number) => void;
  currentIntervalIdx: number;
  dotRefs: React.RefObject<Record<number, null | HTMLSpanElement>>;
  isMobile: boolean;
  data: TTestData[];
};

const Dots: FC<Props> = ({ dotsRef, handleClick, currentIntervalIdx, dotRefs, isMobile, data }) => {
  return (
    <div className={styles.round}>
      <div className={styles.dots} ref={dotsRef}>
        {data.map((interval) => (
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
            {interval.id - 1 === currentIntervalIdx && !isMobile && (
              <div className={styles.dot__field}>
                <span className={styles.dot__text}>{fields2Ru[interval.field]}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dots;
