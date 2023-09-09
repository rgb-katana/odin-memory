import { useDispatch } from "react-redux";
import { startAgain } from "../features/Cards/cardsSlise";

function WinWindow() {
  const dispatch = useDispatch();

  function onStartAgain(e) {
    e.preventDefault();
    dispatch(startAgain());
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm">
      <div className="flex h-1/2 w-1/2 flex-col items-center justify-center bg-red-300">
        <span className="mb-4 block font-bold uppercase">You won!</span>
        <button
          onClick={onStartAgain}
          className="rounded-full bg-teal-300 px-4 py-2 font-sans font-bold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-teal-200 focus:bg-teal-200 focus:outline-none focus:ring focus:ring-teal-200 focus:ring-offset-2 active:bg-teal-200"
        >
          Play again
        </button>
      </div>
    </div>
  );
}

export default WinWindow;
