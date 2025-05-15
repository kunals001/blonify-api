import React from 'react'
import PostListItems from './PostListItems'
import Checkbox from './checkbox'
import { Share } from 'lucide-react'
import ShareLinks from './ShareLinks'


const PostList = () => {
  return (
    <div className='flex gap-[1vw] relative'>

      <div className="flex flex-col gap-2">
        <PostListItems/>
        <PostListItems/>
        <PostListItems/>
        <PostListItems/>
        <PostListItems/>
        <PostListItems/>
      </div>
      <div className="w-1/6 hidden md:flex lg:flex p-[.5vw] flex-col gap-[.5vw] h-[30vw] sticky top-15">

            <Checkbox/>

            <ShareLinks/>
      </div>
    </div>
  )
}

export default PostList