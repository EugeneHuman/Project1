import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + ' ' + s.active}>
          <NavLink to="dialogs/1">Lyci-Fedor</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="dialogs/2">Gerda</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="dialogs/3">KGBT+</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="dialogs/4">T-Rex</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="dialogs/5">Afifa</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="dialogs/6">Golstein</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.dialog}>Hi!</div>
        <div className={s.dialog}>How is your feel?</div>
        <div className={s.dialog}>I'm fine!</div>
      </div>
    </div>
  )
}

export default Dialogs
