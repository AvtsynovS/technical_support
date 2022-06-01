import React from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';

interface Props {
  children?: React.ReactNode;
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  offset?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
}

export const GridContainer = ({ children }: Props) => {
  return <div className={styles.container}>{children}</div>;
};

export const GridRow = ({ children }: Props) => {
  return <div className={styles.row}>{children}</div>;
};

export const GridColumn = ({ children, size = 12, offset = 0 }: Props) => {
  return (
    <div
      className={clsx(styles.column, {
        [styles[`size-${size}`]]: true,
        [styles[`offset-${offset}`]]: true,
      })}
    >
      {children}
    </div>
  );
};
