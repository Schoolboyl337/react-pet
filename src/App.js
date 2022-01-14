import React from "react";
import Counter from "./components/Сounter";
import ClassCounter from "./components/СlassCounter"
import "../src/styles/app.css"

function App() {
  return (
    <div className="App">
      <Counter />
      <ClassCounter />
    </div>
  );
}

export default App;
