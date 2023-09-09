import { useDispatch, useSelector } from "react-redux";
import { shuffle, startShuffle } from "./cardsSlise";
import Card from "./Card";
import { shuffleCards } from "../../helpers";

const regex = /\/([^/]+)\/?$/;

function Cards() {
  const dispatch = useDispatch();
  const { cards, isShuffling } = useSelector((state) => state.cards);

  function onCardClick(pokemonId) {
    dispatch(startShuffle());
    const shuffledCards = shuffleCards(cards);
    dispatch(shuffle(shuffledCards, pokemonId));
  }

  if (isShuffling) return <></>;

  return (
    <>
      {cards.length !== 0 &&
        cards.map((card) => (
          <Card
            pokemonId={card.url.match(regex)[1]}
            name={card.name}
            key={card.name}
            onClick={onCardClick}
          />
        ))}
    </>
  );
}

export default Cards;
