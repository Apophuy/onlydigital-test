import { JSX } from 'react';

import styles from './styles.module.scss';

import Calendar from '../components/Calendar';

function App(): JSX.Element {
  return (
    <div className={styles.container}>
      <Calendar />
    </div>
  );
}

export default App;
