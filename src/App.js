import React from "react";
import "../src/styles/app.css"
import Counter from "./components/Сounter";
import ClassCounter from "./components/СlassCounter"
import PostItem from "./components/PostItem";

function App() {
  return (
    <div className="App">
      <div className="counters">
        <Counter />
        <ClassCounter />
      </div>
        <PostItem post={{number:1, value:"Soup", discription:"Liquid food"}} />
        <PostItem post={{number:2, value:"Fish", discription:"Food living in liquid"}} />
        <PostItem post={{number:3, value:"Tea", discription:"Liquid"}} />
    </div>
  );
}

export default App;
