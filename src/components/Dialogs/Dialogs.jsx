import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'

const DialogItem = (props) => {
  let path = 'dialogs/' + props.id
  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink id={path}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Lyci-Fedor" id="1" />
        <DialogItem name="KGBT+" id="2" />
        <DialogItem name="T-Rex" id="3" />
        <DialogItem name="Afifa" id="4" />
        <DialogItem name="Golstein" id="5" />
        <DialogItem name="Sasaki" id="6" />
      </div>
      <div>
        <div className={s.messages}>
          <Message message="HI!" />
          <Message message="How is your feel?" />
          <Message message="I'm fine!!" />
          <Message message="HI!" />
          <Message message="How is your feel?" />
          <Message message="I'm fine!" />
        </div>
      </div>
    </div>
  )
}

export default Dialogs
