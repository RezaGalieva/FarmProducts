import "./style.css";
import { Title } from "@/components/ui/title/title";
import { Button } from "@/components/ui/button/button";
import { Card } from "@/components/ui/card-advanages/card";
import { advantages } from "@/mocks/advantages";

export const Advantages = () => {
  return (
    <section className="advantages">
      <div className="advantages__wrapper">
        <Title size="small">Почему фермерские продукты лучше?</Title>
        <div className="advantages-list">
          {advantages.map((item) => (
            <Card
              key={item.id}
              color={item.color}
              icon={item.icon}
              badge={item.badge}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        <Button>Купить</Button>
      </div>
    </section>
  );
};
