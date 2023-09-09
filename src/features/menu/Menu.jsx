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
    <div className="col-start-1 col-end-4 row-start-1 flex flex-col items-center justify-center bg-red-400 sm:col-start-2 sm:col-end-5 sm:row-start-2 sm:rounded-md sm:border-4 sm:border-red-600/70">
      <h1 className="mt-2 font-mono uppercase sm:mb-auto sm:mt-4">Game menu</h1>
      <div className="my-2 flex gap-3 sm:mb-auto sm:font-bold">
        <p className="">
          Counter: <span className="">{currentHits.length || 0}/12</span>
        </p>
        <p className="">
          Best score: <span className="">{bestScore}/12</span>
        </p>
      </div>
      <div className="uppercasesm:mb-4 mb-2 flex gap-3">
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
