import { FC } from "react";
import "./style.css";

type ButtonProps = {
  children: string;
  minWidth?: number;
};

export const Button: FC<ButtonProps> = ({ children, minWidth }) => {
  return (
    <button type="button" style={{ minWidth: minWidth }} className="button">
      {children}
    </button>
  );
};
