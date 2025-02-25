import { FC } from 'react';
import styles from './styles.module.scss';

type Props = {
  isMobile: boolean;
};

const Interval: FC<Props> = ({ isMobile }) => {
  return (
    <>
      <div className={styles.interval}>
        <span className={styles.interval__start}>2015</span>
        <span className={styles.interval__end}>2022</span>
      </div>
    </>
  );
};

export default Interval;
