import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  return (
    <div className={s.postsBlock}>
      <h3>My post</h3>
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post message="HI, how are you?" likesCount="12" />
        <Post message="It is my first post" likesCount="22" />
      </div>
    </div>
  )
}

export default MyPosts
