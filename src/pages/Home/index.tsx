import { CoffeCard } from "../../components/CoffeCard";
import { Header } from "./components/Header";

import { HomeContainer, HomeContent } from "./styles";
import { products } from "../../products";

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <h3>Nossos cafés</h3>

      <HomeContent>
        {products.map((product) => {
          return <CoffeCard key={product.id} product={product} />;
        })}
      </HomeContent>
    </HomeContainer>
  );
}
