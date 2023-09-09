import { useSelector } from "react-redux";
import Loader from "./Loader";
import Header from "./Header";
import Footer from "./Footer";
import WinWindow from "./WinWindow";

function AppLayout({ children }) {
  const { isLoading, haveWon } = useSelector((state) => state.cards);
  // const haveWon = true;
  return (
    <div className="mx-auto grid h-screen grid-rows-[auto_1fr_auto] text-2xl">
      {isLoading && <Loader />}
      {haveWon && <WinWindow />}
      <Header />
      <div className="mx-auto grid h-[99%] max-h-[1000px] w-screen grid-cols-5 grid-rows-3 gap-3 self-center p-3 xl:w-10/12 xl:max-w-[1278px]">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
