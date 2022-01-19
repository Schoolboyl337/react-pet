import {React, useState} from 'react'
import MyInput from './UI/input/MyInput'
import MyButton from './UI/button/MyButton'

const PostForm = ({create}) => {
    const [post,setPost] = useState({value: '', discription: ''})
    const addNewPost = (e)=> {
      e.preventDefault()
      const newPost = {...post,id:Date.now()}
      create(newPost)
      setPost({value: '', discription: ''})
    }
  
    return (
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
    )
}

export default PostForm
