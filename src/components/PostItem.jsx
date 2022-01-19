import React from 'react'
import MyButton from './UI/button/MyButton'

const PostItem = (props) => {
    return (
        <div className='post'>
            <div className='post-content'>
                <strong>{props.number} - {props.post.value}</strong>
                <div> {props.post.discription}</div>
            </div>
            <div className='post-btn'>
                <MyButton onClick={()=> props.remove(props.post)}>
                    Удалить
                </MyButton>
            </div>
        </div>
    )
}

export default PostItem
