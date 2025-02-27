import cn from 'classnames';
import { FC } from 'react';

import styles from './styles.module.scss';

import ArrowIcon from '../ArrowIcon';

type Props = {
  dir: 'left' | 'right';
  onClick: () => void;
  className?: string;
  iconClassName?: string;
};

const RoundedButton: FC<Props> = ({ dir, onClick, className, iconClassName }) => {
  return (
    <button className={cn(styles.button, className)} onClick={onClick}>
      <ArrowIcon className={cn({ [styles.icon__right]: dir === 'right' }, iconClassName)} />
    </button>
  );
};

export default RoundedButton;
