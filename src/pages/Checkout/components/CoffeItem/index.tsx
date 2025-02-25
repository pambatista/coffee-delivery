import { Trash } from "@phosphor-icons/react";
import { QuantityButtons } from "../../../../components/QuatityButtons";

import {
  CoffeeItemButtonRemove,
  CoffeItemContainer,
  CoffeItemInfo,
  CoffeItemPrice,
} from "./styles";
import {
  ShoppingCartContext,
  type Product,
} from "../../../../context/shoppingCart";
import { useContext } from "react";

interface CoffeItemProps {
  product: Product;
}

export function CoffeItem({ product }: CoffeItemProps) {
  const { removeProduct, changeQuantityProduct } =
    useContext(ShoppingCartContext);

  const price = product.price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  function handleRemoveProduct() {
    removeProduct(product);
  }

  function handleAddQuantity() {
    changeQuantityProduct({
      quantity: product.quantity + 1,
      product: product,
    });
  }

  function handleRemoveQuantity() {
    changeQuantityProduct({
      quantity: product.quantity - 1,
      product: product,
    });
  }
  return (
    <CoffeItemContainer>
      <img src={product.image} alt={product.name} />
      <CoffeItemInfo>
        <strong>{product.name}</strong>
        <div>
          <QuantityButtons
            quantity={product.quantity}
            onAddQuantity={handleAddQuantity}
            onRemoveQuantity={handleRemoveQuantity}
          />

          <CoffeeItemButtonRemove onClick={handleRemoveProduct}>
            <Trash size={16} /> Remover
          </CoffeeItemButtonRemove>
        </div>
      </CoffeItemInfo>
      <CoffeItemPrice>{price}</CoffeItemPrice>
    </CoffeItemContainer>
  );
}
