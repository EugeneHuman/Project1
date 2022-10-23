import React from 'react'
import s from './Post.module.css'

const Post = () => {
    return (
        <div>
            <div className={s.item}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP7twP8-u8Mjwn3HoPmQKRWpNdktcf2YuFvfi9Jh305eJa0mUVypuMjQq9BAaTGSL9C1g&usqp=CAU"
                    alt=""/>
                post1

                <div>
                    <span>Like</span>
                </div>
            </div>
        </div>
    )
}

export default Post
