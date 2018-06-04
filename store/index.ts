import { createStore } from "redux";
import { RootState, RootReducer } from "./reducer";

export const configureStore = (initialState?: RootState) => {
  return createStore(RootReducer, initialState);
};
