import React from 'react'
import style from "./Post.module.css";

const Post = () => {
  return (
    <div className={style.item}>
      <img src="https://i.pinimg.com/474x/a5/59/35/a5593599b2e6f83fd02d26568e710c86.jpg" alt="text" />
      <div>post 1</div>
    </div>
  )
}

export default Post
