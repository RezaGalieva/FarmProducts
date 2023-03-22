import { Title } from "@/components/ui/title/title";
import manImage from "@/assets/main-page-img.svg";
import "./style.css";

export const About = () => {
  return (
    <section className="about">
      <div className="about__wrapper">
        <Title size="big">Магазин фермерских продуктов с доставкой</Title>
        <p className="about__text">
          Все продукты изготавливаются под заказ. Фермеры начинают готовить
          продукты за день до отправки заказа клиентам. Именно поэтому мы
          принимаем заказы заранее и доставляем продукты максимально свежими.
        </p>
        <img className="about__img" alt="farmer" src={manImage} />
      </div>
    </section>
  );
};
