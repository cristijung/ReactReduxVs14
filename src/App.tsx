import React from "react";
import Counter from "./components/Counter";
import { Provider } from "react-redux";
import { store } from "./store/storeReducer";
import ToDo from "./components/ToDo";

function App() {
  return (
    <>
      <section className="section">
        <h2>Redux</h2>
        <Provider store={store}>
          <Counter />
          <ToDo />
        </Provider>
      </section>
    </>
  );
}

export default App;


