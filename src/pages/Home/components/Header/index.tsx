import { ShoppingCart, Package, Timer, Coffee } from "@phosphor-icons/react";
import homeBanner from "../../../../assets/homeBanner.png";
import {
  HeaderContainer,
  HeaderDescription,
  HeaderTitle,
  HeaderItems,
  HeaderItem,
  type HeaderItemProps,
} from "./styles";

export function Header() {
  const homeProprties = [
    {
      id: 1,
      icon: ShoppingCart,
      title: "Compra simples e segura",
      color: "yellow-dark",
    },
    {
      id: 2,
      icon: Package,
      title: "Embalagem mantém o café intacto",
      color: "gray-dark",
    },
    {
      id: 3,
      icon: Timer,
      title: "Entrega rápida e rastreada",
      color: "yellow-light",
    },
    {
      id: 4,
      icon: Coffee,
      title: "O café chega fresquinho até você",
      color: "purple-dark",
    },
  ];

  return (
    <HeaderContainer>
      <div>
        <HeaderTitle>
          Encontre o café perfeito para {"\n"} qualquer hora do dia
        </HeaderTitle>
        <HeaderDescription>
          Com o Coffee Delivery você recebe seu café onde estiver, a {"\n"}
          qualquer hora
        </HeaderDescription>

        <HeaderItems>
          {homeProprties.map((item) => (
            <HeaderItem
              key={item.id}
              color={item.color as HeaderItemProps["color"]}
            >
              <div>
                <item.icon size={16} weight="fill" />
              </div>
              <span>{item.title}</span>
            </HeaderItem>
          ))}
        </HeaderItems>
      </div>

      <img src={homeBanner} alt="banner" />
    </HeaderContainer>
  );
}
