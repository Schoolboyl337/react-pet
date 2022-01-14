import {React,useState} from "react";
import "../src/styles/app.css"
import Counter from "./components/Сounter";
import ClassCounter from "./components/СlassCounter"
import PostList from "./components/PostList";


function App() {
  const [foodList,setFoodList] = useState( [
    {id:1, value:"Soup", discription:"Liquid food"},
    {id:2, value:"Fish", discription:"Food living in liquid"},
    {id:3, value:"Tea", discription:"Liquid"},
  ])
  const [toDoList,setToDoList] = useState( [
    {id:1, value:"Run", discription:"Some text"},
    {id:2, value:"Forrest", discription:"Text some"},
    {id:3, value:"Run", discription:"Texsom"},
  ])
  return (
    <div className="App">
      <div className="counters">
        <Counter />
        <ClassCounter />
      </div>
      <PostList posts={foodList} title="Cписок Еды" />
      <PostList posts={toDoList} title="Cписок Дел" />
    </div>
  );
}

export default App;
