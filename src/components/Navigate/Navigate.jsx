import React from 'react'
import style from "./Navigate.module.css";

const Navigate = () => {
  return (
    <nav className={style.nav}>
      <div><a href="#Profile" >Profile</a></div>
      <div><a href="#Messages" >Messages</a></div>
      <div><a href="#News" >News</a></div>
      <div><a href="#Music" >Music</a></div>
      <div><a href="#Settings" >Settings</a></div>
    </nav>
  )
}

export default Navigate;
