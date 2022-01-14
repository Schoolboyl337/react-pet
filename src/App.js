import {React,useState} from "react";
import "../src/styles/app.css"
import Counter from "./components/Сounter";
import ClassCounter from "./components/СlassCounter"
import PostItem from "./components/PostItem";

function App() {
  const [posts,setPosts] = useState( [
    {id:1, value:"Soup", discription:"Liquid food"},
    {id:2, value:"Fish", discription:"Food living in liquid"},
    {id:3, value:"Tea", discription:"Liquid"},
  ])
  return (
    <div className="App">
      <div className="counters">
        <Counter />
        <ClassCounter />
      </div>
      <h2 style={{textAlign:"center"}}>
        Список постов
      </h2>
        {posts.map(post =>
          <PostItem post={post} key={post.id}/>
        )}
    </div>
  );
}

export default App;
