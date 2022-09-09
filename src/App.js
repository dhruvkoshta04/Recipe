import "./App.css";
import Favourites from "./components/Favourites";
import { useGlobalContext } from './context'
import Meals from "./components/Meals";
import Modal from "./components/Modal";
import Search from "./components/Search";
function App() {
  const { showModal } = useGlobalContext()

  return (
    <main>
      <Search />
      {/* <Favourites /> */}
      <Meals />
      {showModal && <Modal />}
    </main>
  );
}

export default App;
