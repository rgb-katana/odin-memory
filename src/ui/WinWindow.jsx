function WinWindow() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm">
      <div className="flex h-1/2 w-1/2 flex-col items-center justify-center bg-slate-100">
        <span className="block">You have just memorised all the cards!</span>
        <button>Play again</button>
      </div>
    </div>
  );
}

export default WinWindow;
