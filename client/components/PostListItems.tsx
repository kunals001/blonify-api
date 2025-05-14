import React from 'react'
import ImageKit from './Image';

const PostListItems = () => {
  return (
    <div className='w-full flex gap-[1vh] md:gap-[.5vw] lg:gap-[.5vw] relative'>

        <ImageKit src="https://ik.imagekit.io/8jagcyqun/default-image.jpg?updatedAt=1747192787254" alt="About" className="w-[25vh] h-[10vh] md:w-[25vw] md:h-[16vw] lg:w-[25vw] lg:h-[16vw] rounded-xl object-cover" w={750} h={750} />

        {/* details */}

        <div className=" mt-[1vh] px-[1vh] md:px-[1vw] lg:px-[1vw] flex flex-col gap-[.3vh] md:gap-[.2vw] lg:gap-[.2vw]">

             <h1 className='text-[1.6vh] md:text-[1.7vw] lg:text-[1.7vw] font-second font-semibold text-zinc-700 hover:underline leading-none cursor-pointer'>hello world</h1>

             {/* discription */}

             <p className='text-[1vh] md:text-[1.1vw] lg:text-[1.2vw] font-second font-medium text-zinc-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, <span className='text-prime text-[1vh] md:text-[1vw] lg:text-[1vw] px-[.5vh] md:px-[.5vw] lg:px-[.5vw] rounded-full cursor-pointer border-1 border-prime'>Read more</span></p>

            <div className="text-[1vh] md:text-[1.1vw] lg:text-[1.2vw] font-second font-medium text-zinc-700 hover:underline leading-none ">
                <p>Written by <span className='text-[1vh] md:text-[1.1vw] lg:text-[1.2vw] text-prime '>Kunal Singh </span> on <span className='ext-[1vh] md:text-[1.1vw] lg:text-[1.2vw] text-gray-500 '>1/2/2025</span></p>
            </div>


        </div>

    </div>
  )
}

export default PostListItems