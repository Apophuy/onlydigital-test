import { FC } from 'react';
import { useWindowSize } from '../../utils/hooks';
import styles from './styles.module.scss';
import Title from '../Title';
import Interval from '../Interval';

const Calendar: FC = () => {
  const { isMobile } = useWindowSize();

  return (
    <div className={styles.container}>
      <div className={styles.calendar}>
        <Title isMobile={isMobile} />
        <Interval isMobile={isMobile} />
      </div>
    </div>
  );
};

export default Calendar;
