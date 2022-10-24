import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
  return (
    <div>
      <div className={s.item}>
        <img src="https://st.depositphotos.com/1898481/4049/i/600/depositphotos_40493227-stock-photo-unknown-person.jpg" />
        {props.message}
        <div>
          <span>like</span>
          {props.likesCount}
        </div>
      </div>
    </div>
  )
}

export default Post
