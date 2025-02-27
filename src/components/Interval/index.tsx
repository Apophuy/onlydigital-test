import { FC, useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import { TTestData } from '../../types';
import { gsap } from 'gsap';

type Props = {
  data: TTestData;
};

const Interval: FC<Props> = ({ data }) => {
  const [prevYears, setPrevYears] = useState({ start: data.startYear, end: data.endYear });
  const startRef = useRef<HTMLSpanElement>(null);
  const endRef = useRef<HTMLSpanElement>(null);

  const animateYearChange = (prevYear: number, ref: HTMLSpanElement) => {
    gsap.from(ref, {
      textContent: prevYear,
      duration: 1,
      ease: 'power1.inOut',
      modifiers: {
        textContent: (value) => Math.round(value),
      },
    });
    setPrevYears({ start: data.startYear, end: data.endYear });
  };

  useEffect(() => {
    if (startRef.current) {
      animateYearChange(prevYears.start, startRef.current);
    }
    if (endRef.current) {
      animateYearChange(prevYears.end, endRef.current);
    }
  }, [data]);

  return (
    <div className={styles.interval}>
      <span className={styles.interval__start} ref={startRef}>
        {data.startYear}
      </span>
      <span className={styles.interval__end} ref={endRef}>
        {data.endYear}
      </span>
    </div>
  );
};

export default Interval;
