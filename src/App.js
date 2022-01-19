import {React,useState} from "react";
import "../src/styles/app.css"
import Counter from "./components/Сounter";
import ClassCounter from "./components/СlassCounter"
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";


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

  const createPost = (newPost)=> {
    setToDoList([...toDoList,newPost])
  }

  const removePost = (post)=> {
    setToDoList(toDoList.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <div className="counters">
        <Counter />
        <ClassCounter />
      </div>
      <PostForm create={createPost}/>
      <PostList posts={foodList} title="Cписок Еды" />
      {toDoList.length
        ? <PostList remove={removePost} posts={toDoList} title="Cписок Дел" />
        : <h1 className="ta-c">Сегодня без дел,отдыхай!</h1>
      }
    </div>
  );
}

export default App;
