import { useSelector } from "react-redux";
import Loader from "./Loader";
import Header from "./Header";
import Footer from "./Footer";
import WinWindow from "./WinWindow";

function AppLayout({ children }) {
  const { isLoading, haveWon } = useSelector((state) => state.cards);
  // const haveWon = true;
  return (
    <div className="h-screen text-lg sm:mx-auto sm:grid sm:grid-rows-[auto_1fr_auto] sm:text-2xl">
      {isLoading && <Loader />}
      {haveWon && <WinWindow />}
      <Header />
      <div className="mx-auto grid h-[99%] max-h-[1000px] w-screen grid-cols-3 grid-rows-5 gap-1 self-center sm:grid-cols-5 sm:grid-rows-3 sm:gap-3 sm:p-3 xl:w-10/12 xl:max-w-[1278px]">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
