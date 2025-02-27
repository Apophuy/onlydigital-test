import { FC } from 'react';

import styles from './styles.module.scss';

import { dataLength } from '../../utils/data';
import RoundedButton from '../RoundedButton';

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
          <RoundedButton dir='left' onClick={() => handleClick('left')} />
          <RoundedButton dir='right' onClick={() => handleClick('right')} />
        </div>
      </div>
    </div>
  );
};

export default IntervalControl;
