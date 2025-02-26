import { FC } from 'react';
import styles from './styles.module.scss';
import { TTestData } from '../../types';

type Props = {
  data: TTestData;
};

const Interval: FC<Props> = ({ data }) => {
  return (
    <div className={styles.interval}>
      <span className={styles.interval__start}>{data.startYear}</span>
      <span className={styles.interval__end}>{data.endYear}</span>
    </div>
  );
};

export default Interval;
