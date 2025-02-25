export enum ActionsTypes {
  "INCREMENT_QUANTITY" = "INCREMENT_QUANTITY",
  "DECREASE_QUANTITY" = "DECREASE_QUANTITY",
}

export function incrementQuantity() {
  return {
    type: ActionsTypes.INCREMENT_QUANTITY,
  };
}

export function decreaseQuantity() {
  return {
    type: ActionsTypes.DECREASE_QUANTITY,
  };
}
