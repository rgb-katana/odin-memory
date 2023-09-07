import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
  isLoading: false,
  error: "",
};

export const fetchPokemons = createAsyncThunk(
  "cards/fetchPokemons",
  async function () {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=12&offset=0",
    );
    const data = await response.json();

    return data.results;
  },
);

export const fetchPokemonImage = createAsyncThunk(
  "cards/fetchPokemonImage",
  async function (pokemonImageUrl) {
    const response = await fetch(pokemonImageUrl);
    const data = await response.json();

    return data;
  },
);

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchPokemons.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cards = action.payload;
      })
      .addCase(fetchPokemons.rejected, (state, action) => {
        state.isLoading = false;
        state.error = "There was a problem getting pokemons. Try again.";
      }),
});

export default cardsSlice.reducer;