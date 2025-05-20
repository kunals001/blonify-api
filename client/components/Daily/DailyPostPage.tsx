import React, { useState } from 'react'
import ShareLinks from '../ShareLinks'
import SuggestedPosts from '../SuggestedPosts'
import Link from 'next/link';
import { Search } from 'lucide-react';

const DailyPostPage = ({post}:any) => {
    const [selected, setSelected] = useState("/");

    const menuItems = [
    { label: "Daily", href: "/daily" },
    { label: "Mobiles", href: "/mobiles" },
    { label: "Laptops", href: "/laptops" },
    { label: "Watches", href: "/watches" },
    { label: "Tools", href: "/tools" },
  ];
    
  return (
    <article className='w-full min-h-screen px-[1vh] md:px-[13vw] lg:px-[15vw] pt-[2vh] md:pt-[2vw] lg:p-[2.1vw] flex flex-col gap-[1vh] md:gap[.8vw] lg:gap-[.9vw]'>

      {/* Mobile Share */}
      <ShareLinks className="md:hidden lg:hidden flex md:flex-col flex-row gap-[1vh] md:gap-[.5vw] items-center md:items-start"/>

      <div className="flex flex-col justify-between md:flex-row lg:flex-row">
        <div className="flex flex-col gap-[.5vh] md:gap-[.3vw] lg:gap-[.3vw] py-[2vh] md:py-[1.1vw] lg:py-[1.2vw] px-[.2vh] md:px-[.5vw] lg:px-[.5vw]">
            <h1 className='text-[2.3vh] md:text-[1.7vw] lg:text-[1.7vw] font-semibold text-zinc-700 leading-none'>{post?.title}</h1>

            <p className='text-[1.2vh] md:text-[.8vw] lg:text-[.8vw] font-second font-medium text-zinc-700 pt-[.6vh] md:pt-[1vw] lg:pt-[1vw]'>Written by <span className='text-prime'> Kunal Singh </span> on <span className='text-gray-500'>{post?.createdAt ? new Date(post.createdAt).toLocaleDateString() : 'Unknown'}</span></p>

            <p className='text-[1vh] md:text-[1.1vw] lg:text-[1.1vw] font-second font-medium text-zinc-700 hidden md:block lg:block md:w-[38vw] lg:w-[38vw] pt-[1vw]'>{post?.desc}</p>
        </div>

        <img src={post?.coverImg} alt={post?.altText} className="w-full h-[24vh] md:w-[27vw] md:h-[15vw] rounded-xl object-cover"/>
        
      </div>


      {/* About post */}

      <div className="flex flex-col md:flex-row lg:flex-row mt-[1.5vh] md:mt-[1.1vw] lg:mt-[1.2vw] gap-[1vh] md:gap-[1vw] lg:gap-[1vw]">

        <div className="w-full flex flex-col gap-[1vh] md:gap-[.7vw] lg:gap-[.8vw]">

          <div className="w-full h-full relative mb-[.6vh] md:mb-[.6vw] bg-green-200 rounded-sm px-[1vh] py-[.5vh] md:py-[.5vw]">
            <span className="absolute top-0 left-0 w-[.5vh] rounded-lg md:w-[.7vw] bg-prime h-full "></span>
            
            <h4 className='text-[2vh] md:text-[1.3vw] lg:text-[1.3vw] font-semibold text-zinc-600 pl-[2vh] md:pl-[1vw] top-0'>Highlight</h4>

            <p className='pl-[2vh] md:pl-[1vw] text-zinc-600 text-[1.5vh] md:text-[1vw] leading-[1.8vh] md:leading-[1.2vw] font-third'>{post?.highlight}</p>
          </div>

          <div className="font-prime post-content" dangerouslySetInnerHTML={{ __html: post?.content || "" }}>
            
          </div>


       </div>

        <div className="md:w-[28vw] hidden md:block lg:block lg:w-[30vw] w-full px-[1vh] py-[1vh] md:px-[.6vw] lg:px-[.6vw] sticky top-[7%] h-full">

           {/* Suggested Posts */}

          <SuggestedPosts/> 

          {/* share */}

          <ShareLinks className='hidden md:flex md:flex-col flex-row gap-[1vh] md:gap-[.5vw] items-center md:items-start'/>

         {/* Categories */}


          <div className="Categories hidden md:flex lg:flex flex-col md:gap-[.5vw] lg:gap-[.5vw] mt-[1vh] md:mt-[1vw] lg:mt-[1vw]">
            <p className='md:text-[1vw] lg:text-[1vw] font-second font-medium text-zinc-700'>Categories</p>

            <ul className="flex gap-[.4vw] flex-col md:pr-[2.5vw] lg:pr-[2.5vw] items-start">
            {menuItems.map((item) => (
              <Link href={item.href} key={item.href}>
                <li
                  onClick={() => setSelected(item.href)}
                  className={`px-[1vw] py-[.3vw] hover:underline
                   text-center flex items-center justify-center text-[.9vw] text-medium text-zinc-700 ease-in-out  cursor-pointer`}
                >
                  {item.label}
                </li>
              </Link>
            ))}</ul>
          </div>

          {/* Search */}

          <div className="search hidden md:flex lg:flex h-[2.2vw] w-full relative  items-center justify-end">
          <input 
                type="text" 
                placeholder='Search...'
                className={`relative px-[1.5vw] pt-[.4vw] pb-[.2vw] w-full  bg-white outline-none rounded-full transition-all duration-300 border-2 border-green-400 text-zinc-700 h-full`}
                name='search'
            />

            <div className=" rounded-full absolute right-0 top-0 bg-prime w-[2.5vw] flex items-center justify-center h-full cursor-pointer"><Search className='text-white'/></div>
        </div>

         
        </div>
      </div>
    </article>
  )
}

export default DailyPostPage