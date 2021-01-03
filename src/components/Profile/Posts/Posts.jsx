import React from 'react'
import style from "./Posts.module.css";

import Post from "./Post/Post";

const Posts = () => {
  return (
    <div className={style.posts}>
      <div>
        My posts
      <div>
          <textarea ></textarea>
          <button>add post</button>
        </div>
      </div>
      <Post />
    </div >
  )
}

export default Posts
