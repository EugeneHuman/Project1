import React from 'react'
import s from './Profile.module.css'

const Profile = () => {
  return (
    <div className={s.content}>
      Profile
      <div>
        <img src="https://www.netscribes.com/wp-content/uploads/2020/12/telemedicine_technology_blog_image.jpg" />
      </div>
      <div>ava + description</div>
      <div>
        my post
        <div>
            new post
        </div>
        <div className={s.posts}>
          <div className={s.item}>
              post1
          </div>
          <div className={s.item}>
              post2
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
