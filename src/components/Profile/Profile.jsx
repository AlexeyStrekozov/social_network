import React from 'react'
import style from "./Profile.module.css";
import Posts from "./Posts/Posts";

const Profile = () => {
  return (
    <div className={style.content}>
      <div>
        <img alt="test" src='https://i11.kanobu.ru/r/eda1e6ce20aa944260eec27c4fa991c5/1040x-/u.kanobu.ru/editor/images/87/745731e3-7b2b-416a-b14c-c082228c0675.jpg' />
      </div>
      <div>
        ava+desc
      </div>
      <Posts />
    </div>
  )
}

export default Profile
