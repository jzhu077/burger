import { IIngredients } from "../types/burger";

export enum ActionType {
  ADD_INGREDIENT = "ADD_INGREDIENT",
  REMOVE_INGREDIENT = "REMOVE_INGREDIENT"
}

interface Payload {
  ingredientName: string;
}

export interface IngredientActionTypes {
  actionType: ActionType;
  payload: Payload;
}

export interface ingredientState {
  ingredients: IIngredients;
  totalPrice: number;
}
