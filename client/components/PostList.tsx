import React from 'react'
import PostListItems from './PostListItems'
import Checkbox from './checkbox'
import ShareLinks from './ShareLinks'


const PostList = ({posts}:any) => {
  return (
    <div className='flex gap-[1vw] relative'>

      {posts.length > 0 ? (
        <div className="flex flex-col gap-2">
          {posts.map((post: any, index: number) => (
            <PostListItems post={post} key={index}/>
          ))}

          <div className=""></div>
        </div>
      )
      :(
        <h1>No Post Found</h1>
      )}
      <div className="w-1/6 hidden md:flex lg:flex p-[.5vw] flex-col gap-[.5vw] h-[30vw] sticky top-15">

            <Checkbox/>
            <ShareLinks/>
      </div>
    </div>
  )
}

export default PostList