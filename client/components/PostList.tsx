import React from 'react'
import PostListItems from './PostListItems'

const PostList = () => {
  return (
    <div className='flex flex-col gap-2'>
        <PostListItems/>
        <PostListItems/>
        <PostListItems/>
        <PostListItems/>
        <PostListItems/>
        <PostListItems/>
    </div>
  )
}

export default PostList