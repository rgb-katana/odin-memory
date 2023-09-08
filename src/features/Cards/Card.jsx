import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Card({ name, pokemonId, onClick }) {
  const [image, setImage] = useState();
  // Build a pokemon img url
  const pokemonImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

  const fetchImage = async () => {
    const res = await fetch(pokemonImageUrl);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImage(imageObjectURL);
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center bg-teal-100 hover:blur-sm"
      onClick={() => onClick(pokemonId)}
    >
      <img src={image} className="w-3/4" />
      <span className="text-lg font-semibold">{name}</span>
    </div>
  );
}

export default Card;
