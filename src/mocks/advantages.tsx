import advEat from "@/assets/adv-eat.svg";
import advNature from "@/assets/adv-nature.svg";
import advGarbage from "@/assets/adv-garbage.svg";
import advNoMeat from "@/assets/adv-no-meat.svg";

type Advantage = {
  id: number;
  color: "green" | "red";
  badge: string;
  icon: string;
  title: string;
  description: string;
};

export const advantages: Advantage[] = [
  {
    id: 0,
    color: "green",
    icon: advEat,
    badge: "Фермерские продукты",
    title: "Еда намного вкуснее",
    description:
      "Домашняя колбаса из мяса, соли и специй и колбаса из магазина — два настолько разных продукта, что они даже не родственники"
  },
  {
    id: 1,
    color: "red",
    icon: advGarbage,
    badge: "Магазинные продукты",
    title: "Просроченные продукты",
    description:
      "Из-за большого количество товара сотрудники магазинов не успевают своевременно производить замену товара"
  },
  {
    id: 2,
    color: "green",
    icon: advNature,
    badge: "Фермерские продукты",
    title: "Натуральные продукты",
    description:
      "Поставляем местные органические продукты выращенные без пестицидов и химических удобрений"
  },
  {
    id: 3,
    color: "red",
    icon: advNoMeat,
    badge: "Магазинные продукты",
    title: "Некачественное мясо",
    description:
      "Мясные полуфабрикаты, в которых содержится чрезмерно много натрия, вредных жиров, консервантов"
  }
];
