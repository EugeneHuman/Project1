import React from 'react'
import MyPosts from "./MyPost/MyPosts";
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.content}>
            Profile
            <div>
                <img
                    src="https://www.netscribes.com/wp-content/uploads/2020/12/telemedicine_technology_blog_image.jpg"/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile
