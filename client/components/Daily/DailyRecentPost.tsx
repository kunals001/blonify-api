import React from 'react'
import Link from 'next/link'

const DailyRecentPost = ({post}:any) => {
  return (
    <div className='w-full'>
        <div className="flex gap-[1vh] md:gap-[.5vw] lg:gap-[.5vw]">
            <img src={post?.coverImg} alt={post?.altText} className="w-[16vh] h-[10vh] md:w-[25vw] md:h-[16vw] lg:w-[25vw] lg:h-[16vw] rounded-xl object-cover"/>

            <div className=" flex pt-[1vh] md:pt-[1vw] lg:pt-[1vw] flex-col gap-[.3vh] md:gap-[1vw] lg:gap-[1vw]px-[.3vh] md:px-[.4vh] lg:px-[.5vw] py-[.2vh] md:py-[.3vw] lg:py-[.3vw]">
                <h1 className='text-[1.4vh] md:text-[1.5vw] lg:text-[1.5vw] font-second font-semibold text-zinc-700 hover:underline leading-none cursor-pointer w-[27vh] md:w-[42vw] lg:w-[42vw]'>{post?.title}</h1>

                <p className='text-[1vh] md:text-[1vw] lg:text-[1vw] font-second font-medium text-zinc-700  md:w-[40vw] lg:w-[40vw] leading-none'>{post?.desc?.slice(0, 130)}</p>

                <div className="flex gap-[.5vh] md:gap-[1vw] lg:gap-[1vw] pb-[.3vh] md:pb-[.3vw] pl-[.2vh] items-center">
                    <p className='text-[1vh] md:text-[.8vw] lg:text-[.8vw] font-second text-zinc-500'>Written by <span className='text-prime'>Kunal Singh</span></p>

                    <Link href={`/article/${post?.slug}`}><div className="px-[.4vh] md:px-[.3vw] lg:px-[.4vw] rounded-full md:text-white text-prime md:bg-prime cursor-pointer text-[1vh] md:text-[.7vw] lg:text-[.8vw] text-center">Read more...</div></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DailyRecentPost