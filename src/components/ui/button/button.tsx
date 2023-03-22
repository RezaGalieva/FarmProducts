import { FC } from 'react';
import css from './button.module.css';

type ButtonProps = {
  children: string;
  minWidth?: number;
};

export const Button: FC<ButtonProps> = ({ children, minWidth }) => {
  return (
    <button type='button' style={{ minWidth: minWidth }} className={css.button}>
      {children}
    </button>
  );
};
