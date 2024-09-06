import React from "react";
import Counter from "./components/Counter";
import { Provider } from "react-redux";
import { store } from "./store/counterReducer";

function App() {
  return (
    <>
      <section className="section">
        <h2>Redux</h2>
        <Provider store={store}>
          <Counter />
        </Provider>
      </section>
    </>
  );
}

export default App;


