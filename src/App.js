import {React,useState} from "react";
import "../src/styles/app.css"
import Counter from "./components/Сounter";
import ClassCounter from "./components/СlassCounter"
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";


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

  const [post,setPost] = useState({value: '', discription: ''})
  const addNewPost = (e)=> {
    e.preventDefault()
    setToDoList([...toDoList, {...post, id:Date.now()}])
    setPost({value: '', discription: ''})
  }


  return (
    <div className="App">
      <div className="counters">
        <Counter />
        <ClassCounter />
      </div>
      <form>
        <MyInput
          value={post.value}
          onChange={e => setPost({...post,value:e.target.value})}
          type="text"
          placeholder="Название"
        />
        <MyInput
          value={post.discription}
          onChange={e => setPost({...post,discription:e.target.value})}
          type="text" 
          placeholder="Описание"
        />
        <MyButton onClick={addNewPost}>Создать дело</MyButton>
      </form>
      <PostList posts={foodList} title="Cписок Еды" />
      <PostList posts={toDoList} title="Cписок Дел" />
    </div>
  );
}

export default App;
