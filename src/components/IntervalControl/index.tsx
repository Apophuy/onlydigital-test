import { FC } from 'react';
import styles from './styles.module.scss';
import { dataLength } from '../../utils/data';
import ArrowIcon from '../ArrowIcon';

type Props = {
  currentIntervalIdx: number;
  handleClick: (dir: 'left' | 'right') => void;
};

const IntervalControl: FC<Props> = ({ currentIntervalIdx, handleClick }) => {
  return (
    <div className={styles.container}>
      <div className={styles.interval}>
        <span className={styles.interval__data}>{`0${currentIntervalIdx + 1}/0${dataLength}`}</span>
        <div className={styles.interval__buttons}>
          <button className={styles.interval__button} onClick={() => handleClick('left')}>
            <ArrowIcon />
          </button>
          <button className={styles.interval__button} onClick={() => handleClick('right')}>
            <ArrowIcon className={styles.interval__icon} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntervalControl;
