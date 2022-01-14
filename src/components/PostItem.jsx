import React from 'react'

const PostItem = (props) => {
    return (
        <div className='post'>
            <div className='post-content'>
                <strong>{props.post.number} - {props.post.value}</strong>
                <div> {props.post.discription}</div>
            </div>
            <div className='post-btn'>
                <button>Удалить</button>
            </div>
        </div>
    )
}

export default PostItem
