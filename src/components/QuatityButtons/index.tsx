import { QuantityButtonsContianer } from "./styles";
import { Minus, Plus } from "@phosphor-icons/react";

interface QuantityButtonsProps {
  quantity: number;
  onAddQuantity: () => void;
  onRemoveQuantity: () => void;
}

export function QuantityButtons({
  quantity,
  onAddQuantity,
  onRemoveQuantity,
}: QuantityButtonsProps) {
  return (
    <QuantityButtonsContianer>
      <button type="button">
        <Minus size={14} weight="bold" onClick={onRemoveQuantity} />
      </button>
      <span>{quantity}</span>
      <button onClick={onAddQuantity} type="button">
        <Plus size={14} weight="bold" />
      </button>
    </QuantityButtonsContianer>
  );
}
