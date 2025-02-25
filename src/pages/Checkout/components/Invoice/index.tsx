import { useContext } from "react";
import { CoffeItem } from "../CoffeItem";

import {
  ButtonConfirmeContainer,
  TitleEmpty,
  TotalInvoiceContainer,
  TotalInvoiceInfo,
} from "./styles";
import { ShoppingCartContext } from "../../../../context/shoppingCart";

export function Invoice() {
  const { products } = useContext(ShoppingCartContext);

  const coffesTotal = products.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  const coffesTotalFormated = coffesTotal.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const total = coffesTotal + 3.5;
  const totalFormated = total.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div>
      {products.length === 0 ? (
        <TitleEmpty>Seu carrinho esta vazio</TitleEmpty>
      ) : (
        products.map((coffe) => <CoffeItem key={coffe.id} product={coffe} />)
      )}

      <TotalInvoiceContainer>
        <TotalInvoiceInfo>
          <span>Total de itens</span>
          <span>{coffesTotalFormated}</span>
        </TotalInvoiceInfo>

        <TotalInvoiceInfo>
          <span>Entrega</span>
          <span>R$ 3,50</span>
        </TotalInvoiceInfo>

        <TotalInvoiceInfo>
          <strong>Total</strong>
          <strong>{totalFormated}</strong>
        </TotalInvoiceInfo>
      </TotalInvoiceContainer>
      <ButtonConfirmeContainer type="submit">
        Confirmar Pedido
      </ButtonConfirmeContainer>
    </div>
  );
}
