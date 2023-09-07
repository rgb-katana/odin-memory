function Card({ name, pokemonId }) {
  // Build a pokemon img url
  const pokemonImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

  return (
    <div>
      {name}
      <img src={pokemonImageUrl} />
    </div>
  );
}

export default Card;
