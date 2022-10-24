import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  return (
    <div className={s.posts}>
      my post
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <Post message="HI, how are you?" likesCount="12" />
      <Post message="It is my first post" likesCount="22" />
    </div>
  )
}

export default MyPosts
