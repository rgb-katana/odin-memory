import { useDispatch, useSelector } from "react-redux";
import { endGame, fetchCards } from "../Cards/cardsSlise";

function Menu() {
  const { cards } = useSelector((state) => state.cards);
  const dispatch = useDispatch();

  function onStart(e) {
    if (cards.length > 0) return;
    e.preventDefault();
    dispatch(fetchCards());
  }

  function onEnd(e) {
    if (!cards.length) return;
    e.preventDefault();
    dispatch(endGame());
  }

  const { currentHits, bestScore } = useSelector((state) => state.cards);
  return (
    <div className="col-start-2 col-end-5 row-start-2 flex flex-col items-center justify-center bg-red-300">
      <h1 className="text-lg font-bold">Game menu.</h1>
      <div className="flex gap-3">
        <p className="text-lg font-bold">
          Counter: <span className="italic">{currentHits.length || 0}/12</span>
        </p>

        <p className="text-lg font-bold">
          Best score: <span className="italic">{bestScore}/12</span>
        </p>
      </div>
      <div className="flex gap-3">
        <button className="bg-teal-400" onClick={onStart}>
          Start
        </button>
        <button className="bg-teal-400" onClick={onEnd}>
          End
        </button>
      </div>
    </div>
  );
}

export default Menu;
