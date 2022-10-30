import React from 'react'
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img src="https://www.netscribes.com/wp-content/uploads/2020/12/telemedicine_technology_blog_image.jpg" />
      </div>
      <div className={s.descriptionBlock}>ava + description</div>
    </div>
  )
}
export default ProfileInfo
