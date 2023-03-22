import { FC } from "react";
import "./style.css";

export type TitleSize = "big" | "small";

type TitleProps = {
  children: string;
  size?: TitleSize;
};

export const Title: FC<TitleProps> = ({ children, size }) => {
  const className = `title${size ? ` title_${size}` : ""}`;
  if (size === "big") {
    return <h1 className={className}>{children}</h1>;
  }
  return <h2 className={className}>{children}</h2>;
};
