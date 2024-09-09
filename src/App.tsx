import React from "react";
import Counter from "./components/Counter";
import { Provider } from "react-redux";
import { store } from "./store/storeReducer";
import ToDo from "./components/ToDo";
import CatList from "./components/CatsList";

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
        </Provider>
      </section>
    </>
  );
}

export default App;


