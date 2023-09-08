function Card({ name, pokemonId }) {
  // Build a pokemon img url
  const pokemonImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

  return (
    <div className="flex flex-col">
      <img src={pokemonImageUrl} />
      {name}
    </div>
  );
}

export default Card;
