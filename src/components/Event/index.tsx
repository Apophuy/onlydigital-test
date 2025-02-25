import { FC } from 'react';
import { TEvent } from '../../types';
import styles from './styles.module.scss';

type Props = {
  isMobile?: boolean;
  event: TEvent;
};

const Event: FC<Props> = ({ isMobile, event }) => {
  return (
    <div className={styles.event}>
      <span className={styles.event__year}>{event.year}</span>
      <p className={styles.event__text}>{event.event}</p>
    </div>
  );
};

export default Event;
