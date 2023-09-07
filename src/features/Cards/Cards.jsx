import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons } from "./cardsSlise";
import Card from "./Card";
import { useEffect } from "react";

const regex = /\/([^/]+)\/?$/;

function Cards() {
  const dispatch = useDispatch();
  const { cards } = useSelector((state) => state.cards);

  useEffect(
    function () {
      dispatch(fetchPokemons());
    },
    [dispatch],
  );

  return (
    <>
      {cards.map((card) => (
        <Card
          pokemonId={card.url.match(regex)[1]}
          name={card.name}
          key={card.name}
        />
      ))}
    </>
  );
}

export default Cards;
