import logo from "@/assets/logotype.svg";
import "./style.css";

export const Logo = () => {
  return (
    <a href="/" className="logo__link">
      <img src={logo} alt="логотип" />
      <span>Фермерские продукты</span>
    </a>
  );
};
