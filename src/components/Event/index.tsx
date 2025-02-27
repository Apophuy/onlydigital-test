import { FC } from 'react';

import styles from './styles.module.scss';

import { TEvent } from '../../types';

type Props = {
  event: TEvent;
};

const Event: FC<Props> = ({ event }) => {
  return (
    <div className={styles.event}>
      <span className={styles.event__year}>{event.year}</span>
      <p className={styles.event__text}>{event.event}</p>
    </div>
  );
};

export default Event;
