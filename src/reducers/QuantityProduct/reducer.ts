import { ActionsTypes } from "./actions";

interface QuatityProductAction {
  type: ActionsTypes;
}

export function quantityProductReducer(state: number, action: any) {
  switch (action.type) {
    case ActionsTypes.INCREMENT_QUANTITY:
      return {
        state: state + 1,
      };
    case ActionsTypes.DECREASE_QUANTITY:
      return {
        state: state - 1,
      };
    default:
      return state;
  }
}
