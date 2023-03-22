import { FC } from "react";
import "./style.css";

type CardProps = {
  color: "green" | "red";
  badge: string;
  icon: string;
  title: string;
  description: string;
};

export const Card: FC<CardProps> = ({
  color,
  icon,
  badge,
  title,
  description
}) => {
  function getColorClass() {
    switch (color) {
      case "green":
        return "advanatge-card--green";
      case "red":
        return "advanatge-card--red";
    }
  }
  return (
    <div className={`advantage-card ${getColorClass()}`}>
      <img className="advantage-card_icon" src={icon} alt={title} />
      <span className="advantage-card_badge">{badge}</span>
      <h3 className="advantage-card_title">{title}</h3>
      <p className="advantage-card_description">{description}</p>
    </div>
  );
};
