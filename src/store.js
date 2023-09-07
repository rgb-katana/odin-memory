import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "./features/Cards/cardsSlise";

const store = configureStore({
  reducer: {
    cards: cardsReducer,
  },
});

export default store;
