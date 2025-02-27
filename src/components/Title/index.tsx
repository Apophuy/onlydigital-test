import { FC } from 'react';

import styles from './styles.module.scss';

const Title: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title__wrapper}>
        <h1 className={styles.title}>Исторические даты</h1>
      </div>
    </div>
  );
};

export default Title;
