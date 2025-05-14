import React from 'react'
import ImageKit from '@/components/Image';
import Link from 'next/link';

const FeaturedPost = () => {
  return (
    <div className='w-full md:w-full lg:w-full md:h-[30vw] lg:h-[30vw] py-[1vh] md:py-[.1vw] lg:py-[.1vw] lg:flex md:flex gap-[3vh] md:gap-[.5vw] lg:gap-[.5vw] flex flex-col md:flex-row lg:flex-row relative'>
        {/* first post */}

        <div className="w-full md:h-full lg:h-full md:w-1/2 lg:w-1/2 rounded-xl flex flex-col overflow-hidden bg-green-200 cursor-pointer px-[.5vh] pt-[.5vh] pb-[2vh] md:p-[.5vw] lg:p-[.5vw]   transition-all duration-500 ease-in-out">

        {/* image */}
            <ImageKit src="https://ik.imagekit.io/8jagcyqun/default-image.jpg?updatedAt=1747192787254" alt="About" className="w-full h-[23vh] rounded-xl object-cover md:w-full lg:w-full md:h-[20vw] lg:h-[20vw]" w={800} h={800} />

        {/* details */}

        <div className="w-full object-cover md:w-full lg:w-full mt-[1vh] px-[1vh] md:px-[1vw] lg:px-[1vw] flex flex-col gap-[.4vh] md:gap-[.4vw] lg:gap-[.4vw]">
            <div className="flex items-center gap-[.8vh] md:gap-[1vw] lg:gap-[1.1vw]">
            <p className='text-[1.8vh] md:text-[1.3vw] lg:text-[1.3vw] font-semibold text-zinc-700'>01.</p>

            {/* category */}

            <Link href="/mobiles" className='text-[1.2vh] px-[1vh] md:px-[.5vw] lg:px-[.6vw] md:text-[1vw] lg:text-[1vw] font-medium text-prime border-2 border-prime rounded-full text-center'>Mobiles</Link>

            <span className='text-[1vh] md:text-[1vw] lg:text-[1vw]  text-zinc-500 hover:underline'>2 days ago</span></div>

            {/* title */}

            <h1 className='text-[2vh] md:text-[1.4vw] lg:text-[1.4vw] font-semibold text-zinc-700 hover:underline leading-none' >My first post My first post My first post My first post My first post My first post</h1>

        </div>


        </div>



        {/* Other posts */}

        <div className="w-full md:h-full lg:h-full md:w-1/2 lg:w-1/2 flex flex-col gap-[.5vh] md:gap-[.5vw] lg:gap-[.5vw] relative">

            <div className="w-full md:h-1/4 lg:h-1/4 rounded-xl flex gap-[1vh] md:ga-[1vw] lg:gap-[1vw] overflow-hidden hover:bg-green-200 cursor-pointer p-[.5vh] md:p-[.5vw] lg:p-[.5vw]   transition-all duration-500 ease-in-out">
                {/* image */}
                <ImageKit src="https://ik.imagekit.io/8jagcyqun/default-image.jpg?updatedAt=1747192787254" alt="About" className="w-[24vh] h-[10vh] rounded-xl object-cover md:w-[10vw] lg:w-[10vw] md:h-full lg:h-full" w={750} h={750} />


        {/* details */}

        <div className="w-full object-cover md:w-full lg:w-full mt-[1vh] px-[1vh] md:px-[1vw] lg:px-[1vw] flex flex-col gap-[.3vh] md:gap-[.2vw] lg:gap-[.2vw]">
            <div className="flex items-center gap-[1vh] md:gap-[1vw] lg:gap-[1vw]">
            <p className='text-[1.4vh] md:text-[1vw] lg:text-[1vw] font-semibold text-zinc-700'>01.</p>

            {/* category */}

            <Link href="/mobiles" className='text-[1vh] px-[.8vh] md:px-[.4vw] lg:px-[.4vw] md:text-[.7vw] lg:text-[.7vw] font-medium text-prime border-2 border-prime rounded-full text-center'>Mobiles</Link>

            <span className='text-[.8vh] md:text-[.8vw] lg:text-[.8vw]  text-zinc-500 hover:underline'>2 days ago</span></div>

            {/* title */}

            <h1 className='text-[1.6vh] md:text-[1.1vw] lg:text-[1.1vw] font-second font-semibold text-zinc-700 hover:underline leading-none'>My first post My first post My first post My first post My first post</h1>

            </div>
            </div>

            <div className="w-full md:h-1/4 lg:h-1/4 rounded-xl flex gap-[1vh] md:ga-[1vw] lg:gap-[1vw] overflow-hidden hover:bg-green-200 cursor-pointer p-[.5vh] md:p-[.5vw] lg:p-[.5vw]   transition-all duration-500 ease-in-out">
                {/* image */}
                <ImageKit src="https://ik.imagekit.io/8jagcyqun/default-image.jpg?updatedAt=1747192787254" alt="About" className="w-[24vh] h-[10vh] rounded-xl object-cover md:w-[10vw] lg:w-[10vw] md:h-full lg:h-full" w={750} h={750} />


        {/* details */}

        <div className="w-full object-cover md:w-full lg:w-full mt-[1vh] px-[1vh] md:px-[1vw] lg:px-[1vw] flex flex-col gap-[.3vh] md:gap-[.2vw] lg:gap-[.2vw]">
            <div className="flex items-center gap-[1vh] md:gap-[1vw] lg:gap-[1vw]">
            <p className='text-[1.4vh] md:text-[1vw] lg:text-[1vw] font-semibold text-zinc-700'>01.</p>

            {/* category */}

            <Link href="/mobiles" className='text-[1vh] px-[.8vh] md:px-[.4vw] lg:px-[.4vw] md:text-[.7vw] lg:text-[.7vw] font-medium text-prime border-2 border-prime rounded-full text-center'>Mobiles</Link>

            <span className='text-[.8vh] md:text-[.8vw] lg:text-[.8vw]  text-zinc-500 hover:underline'>2 days ago</span></div>

            {/* title */}

            <h1 className='text-[1.6vh] md:text-[1.1vw] lg:text-[1.1vw] font-second font-semibold text-zinc-700 hover:underline leading-none'>My first post My first post My first post My first post My first post</h1>

            </div>
            </div>

            <div className="w-full md:h-1/4 lg:h-1/4 rounded-xl flex gap-[1vh] md:ga-[1vw] lg:gap-[1vw] overflow-hidden hover:bg-green-200 cursor-pointer p-[.5vh] md:p-[.5vw] lg:p-[.5vw]   transition-all duration-500 ease-in-out">
                {/* image */}
                <ImageKit src="https://ik.imagekit.io/8jagcyqun/default-image.jpg?updatedAt=1747192787254" alt="About" className="w-[24vh] h-[10vh] rounded-xl object-cover md:w-[10vw] lg:w-[10vw] md:h-full lg:h-full" w={750} h={750} />


        {/* details */}

        <div className="w-full object-cover md:w-full lg:w-full mt-[1vh] px-[1vh] md:px-[1vw] lg:px-[1vw] flex flex-col gap-[.3vh] md:gap-[.2vw] lg:gap-[.2vw]">
            <div className="flex items-center gap-[1vh] md:gap-[1vw] lg:gap-[1vw]">
            <p className='text-[1.4vh] md:text-[1vw] lg:text-[1vw] font-semibold text-zinc-700'>01.</p>

            {/* category */}

            <Link href="/mobiles" className='text-[1vh] px-[.8vh] md:px-[.4vw] lg:px-[.4vw] md:text-[.7vw] lg:text-[.7vw] font-medium text-prime border-2 border-prime rounded-full text-center'>Mobiles</Link>

            <span className='text-[.8vh] md:text-[.8vw] lg:text-[.8vw]  text-zinc-500 hover:underline'>2 days ago</span></div>

            {/* title */}

            <h1 className='text-[1.6vh] md:text-[1.1vw] lg:text-[1.1vw] font-second font-semibold text-zinc-700 hover:underline leading-none'>My first post My first post My first post My first post My first post</h1>

            </div>
            </div>
            
        </div>
    </div>
  )
}

export default FeaturedPost