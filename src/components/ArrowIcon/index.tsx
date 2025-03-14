import cn from 'classnames';
import { FC } from 'react';

import styles from './styles.module.scss';

type Props = {
  className?: string;
};

const ArrowIcon: FC<Props> = ({ className }) => {
  return (
    <div className={styles.icon}>
      <svg
        className={cn(styles.icon__svg, className)}
        viewBox='0 0 10 14'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M8.49988 0.750001L2.24988 7L8.49988 13.25' />
      </svg>
    </div>
  );
};

export default ArrowIcon;
