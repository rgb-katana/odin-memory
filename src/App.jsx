import Menu from "./features/menu/Menu";
import AppLayout from "./ui/AppLayout";
import Cards from "./features/Cards/Cards";

function App() {
  return (
    <AppLayout>
      <Menu />
      <Cards />
    </AppLayout>
  );
}

export default App;
