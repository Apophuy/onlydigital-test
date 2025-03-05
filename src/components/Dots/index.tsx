import cn from 'classnames';
import { FC } from 'react';

import styles from './styles.module.scss';

import { TTestData } from '../../types';
import { dotNumberRotation, dotRotation, fieldRotation } from '../../utils';
import { fields2Ru } from '../../utils/constants';
import { dataLength } from '../../utils/data';

type Props = {
  dotsRef: React.RefObject<HTMLDivElement | null>;
  handleClick: (dotNumber: number) => void;
  currentIntervalIdx: number;
  dotRefs: React.RefObject<Record<number, null | HTMLSpanElement>>;
  isMobile: boolean;
  data: TTestData[];
  showTitle: boolean;
};

const Dots: FC<Props> = ({
  dotsRef,
  handleClick,
  currentIntervalIdx,
  dotRefs,
  isMobile,
  data,
  showTitle,
}) => {
  return (
    <div className={styles.round}>
      <div className={styles.dots} ref={dotsRef}>
        {data.map((interval, idx) => (
          <div
            key={`interval-${interval.id}`}
            className={cn(styles.dot, {
              [styles.dot__active]: interval.id - 1 === currentIntervalIdx,
            })}
            onClick={() => handleClick(interval.id)}
            style={{ transform: dotRotation(isMobile, idx, dataLength) }}
          >
            <div className={styles.dot__inner}>
              <span
                className={styles.dot__number}
                ref={(el) => {
                  dotRefs.current[interval.id] = el;
                }}
                style={{ transform: dotNumberRotation(isMobile, idx, dataLength) }}
              >
                {interval.id}
              </span>
            </div>
            {interval.id - 1 === currentIntervalIdx && !isMobile && (
              <div
                className={styles.dot__field}
                style={{ transform: fieldRotation(isMobile, dataLength) }}
              >
                <span
                  className={cn(
                    styles.dot__text,
                    { [styles.dot__show]: showTitle },
                    { [styles.dot__hide]: !showTitle }
                  )}
                >
                  {fields2Ru[interval.field]}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dots;
