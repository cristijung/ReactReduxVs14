import Counter from "./components/Counter";
import { Provider } from "react-redux";
import { store } from "./store/storeReducer";
import ToDo from "./components/ToDo";
import CatList from "./components/CatsList";
import CatListQuery from "./components/CatsListQuery";
import CatsSagaComponent from "./components/CatsSagaComponent";

function App() {
  return (
    <>
      <section className="section">
        <h2>Redux</h2>
        <Provider store={store}>
          <Counter />
          <ToDo />
          <hr/>
          <CatList/>
          <hr/>
          <CatListQuery/>
          <hr/>
          <CatsSagaComponent/>
        </Provider>
      </section>
    </>
  );
}

export default App;


