import React from 'react'
import logo from '../../logo.svg';
import style from "./Header.module.css";

function Header() {
  return (
    <header className={style.header}>
      <img src={logo} className={style.app_logo} alt="logo" />
    </header>
  )
}

export default Header
