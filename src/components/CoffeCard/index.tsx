import { ShoppingCart } from "@phosphor-icons/react";
import {
  CoffeCardContainer,
  Chip,
  Price,
  AddToCartButton,
  ChipsGroup,
} from "./styles";

import { QuantityButtons } from "../QuatityButtons";
import { useContext, useReducer } from "react";
import { ShoppingCartContext, type Product } from "../../context/shoppingCart";

interface CoffeCardProps {
  product: Product;
}

export function CoffeCard({ product }: CoffeCardProps) {
  const { changeQuantityProduct, addProduct, products } =
    useContext(ShoppingCartContext);

  const [quantity, dispache] = useReducer(
    (state: number, action: { type: string }) => {
      switch (action.type) {
        case "INCREMENT_QUANTITY": {
          return state + 1;
        }
        case "DECREMENT_QUANTITY":
          return state - 1;
        default:
          return state;
      }
    },
    1
  );

  const productAlreadyInCart = products.find(
    (product_state) => product_state.id === product.id
  );

  const priceFormated = product.price.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  function handleAddToCart() {
    addProduct({
      ...product,
      quantity,
    });
  }

  function handleAddQuantity() {
    dispache({
      type: "INCREMENT_QUANTITY",
    });
    changeQuantityProduct({
      quantity: quantity + 1,
      product,
    });
  }

  function handleRemoveQuantity() {
    if (quantity === 1) return;

    dispache({
      type: "DECREMENT_QUANTITY",
    });

    changeQuantityProduct({
      quantity: quantity - 1,
      product,
    });
  }

  return (
    <CoffeCardContainer>
      <img src={product.image} alt="cafe expresso" />

      <ChipsGroup>
        {product.tags.map((tag) => (
          <Chip key={tag}>{tag}</Chip>
        ))}
      </ChipsGroup>
      <h3>{product.name}</h3>

      <span>{product.description}</span>

      <Price>
        <span>{priceFormated}</span>
        <div>
          <QuantityButtons
            quantity={quantity}
            onAddQuantity={handleAddQuantity}
            onRemoveQuantity={handleRemoveQuantity}
          />
          <AddToCartButton
            onClick={handleAddToCart}
            selected={!!productAlreadyInCart}
          >
            <ShoppingCart size={22} weight="fill" />
          </AddToCartButton>
        </div>
      </Price>
    </CoffeCardContainer>
  );
}
