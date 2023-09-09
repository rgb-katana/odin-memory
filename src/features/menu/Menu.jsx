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
    <div className="col-start-2 col-end-5 row-start-2 flex flex-col items-center justify-center rounded-md border-4 border-red-600/70 bg-red-400">
      <h1 className="mb-auto mt-4 font-mono uppercase">Game menu</h1>
      <div className="mb-auto flex gap-3  font-bold">
        <p className="">
          Counter: <span className="">{currentHits.length || 0}/12</span>
        </p>
        <p className="">
          Best score: <span className="">{bestScore}/12</span>
        </p>
      </div>
      <div className="mb-4 flex gap-3  uppercase">
        <button
          className="rounded-full bg-teal-300 px-4 py-2 font-sans font-bold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-teal-200 focus:bg-teal-200 focus:outline-none focus:ring focus:ring-teal-200 focus:ring-offset-2 active:bg-teal-200"
          onClick={onStart}
        >
          Start
        </button>
        <button
          className="rounded-full bg-teal-300 px-4 py-2 font-sans font-bold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-teal-200 focus:bg-teal-200 focus:outline-none focus:ring focus:ring-teal-200 focus:ring-offset-2 active:bg-teal-200"
          onClick={onEnd}
        >
          End
        </button>
      </div>
    </div>
  );
}

export default Menu;
