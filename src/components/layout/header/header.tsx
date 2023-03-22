import { Button } from "../../ui/button/button";
import { Logo } from "../../ui/logo/logo";
import "./style.css";

export const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Button>Купить</Button>
    </header>
  );
};
