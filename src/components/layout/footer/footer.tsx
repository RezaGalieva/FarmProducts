import { Logo } from "../../ui/logo/logo";
import { Copyright } from "../../ui/copyright/copyright";
import "./style.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <Logo />
      <Copyright />
    </footer>
  );
};
