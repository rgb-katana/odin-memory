import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
  isLoading: false,
  error: "",
  currentHits: [],
  currentScore: 0,
  bestScore: 0,
  haveWon: false,
};

export const fetchCards = createAsyncThunk(
  "cards/fetchPokemons",
  async function () {
    const offset = Math.floor(Math.random() * 61);
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=12&offset=${offset}`,
    );
    const data = await response.json();

    return data.results;
  },
);

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    shuffle: {
      prepare(newCards, pokemonId) {
        return {
          payload: { newCards, pokemonId },
        };
      },
      reducer(state, action) {
        const { pokemonId, newCards } = action.payload;
        state.cards = newCards;
        const isAlreadyIn = state.currentHits.find((id) => id === pokemonId);
        if (isAlreadyIn) {
          state.currentHits = [];
          return;
        }
        state.currentHits.push(pokemonId);
        if (state.currentHits.length === 12) {
          state.haveWon = true;
        }
        if (state.bestScore < state.currentHits.length)
          state.bestScore = state.currentHits.length;
      },
    },
    endGame(state, action) {
      state.cards = [];
      state.currentHits = [];
      state.currentScore = 0;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchCards.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cards = action.payload;
      })
      .addCase(fetchCards.rejected, (state, action) => {
        state.isLoading = false;
        state.error = "There was a problem getting pokemons. Try again.";
      }),
});

export default cardsSlice.reducer;

export const { shuffle, endGame } = cardsSlice.actions;
