import styles from './styles.module.scss';
import { useWindowSize } from '../utils/hooks';

function App() {
  const { isMobile } = useWindowSize();
  return (
    <div className={styles.container}>
      <div className={styles.title__wrapper}>
        <h1 className={styles.title}>Исторические даты</h1>
      </div>
    </div>
  );
}

export default App;
