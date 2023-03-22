import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { MainPage } from "@/components/pages/main-page/main-page";
import "./style.css";

export const PageWrapper = () => {
  return (
    <div>
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
};
