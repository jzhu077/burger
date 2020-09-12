import {ActionType, IngredientActionTypes, ingredientState} from "./types";
import {IIngredients} from "../types/burger";

const initialState: ingredientState = {
  ingredients: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0
  },
  totalPrice: 0
};

export const reducer = (state = initialState, action: IngredientActionTypes): ingredientState =>{
  const {payload:{ingredientName}} = action
  switch (action.actionType){
   case ActionType.ADD_INGREDIENT:
     return {...state,ingredients:{...state.ingredients,[ingredientName]: state.ingredients[<keyof IIngredients>ingredientName] + 1 }}
   case ActionType.REMOVE_INGREDIENT:
     return {...state,ingredients:{...state.ingredients,[ingredientName]: state.ingredients[<keyof IIngredients>ingredientName] - 1 }}
   default:
     return state
 }
}

