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
      className="pop teal-200 flex flex-col items-center justify-center rounded-md border-2 border-teal-400 bg-teal-300 transition-colors hover:bg-teal-200"
      onClick={() => onClick(pokemonId)}
    >
      <img src={image} className="w-3/4" />
      <span className="text-lg font-bold uppercase">{name}</span>
    </div>
  );
}

export default Card;
