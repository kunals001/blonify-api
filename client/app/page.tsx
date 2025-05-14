"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { Search } from "lucide-react"
import ImageKit from "@/components/Image"
import FeaturedPost from "@/components/FeaturedPost"
import PostList from "@/components/PostList"


const page = () => {

  const [selected, setSelected] = useState("/");

  const menuItems = [
    { label: "Daily", href: "/daily" },
    { label: "Mobiles", href: "/mobiles" },
    { label: "Laptops", href: "/laptops" },
    { label: "Watches", href: "/watches" },
    { label: "Tools", href: "/tools" },
    { label: "Compare", href: "/compare" },
  ];

  return (
    <div className="w-full min-h-screen px-[1vh] md:px-[13vw] lg:px-[15vw] pt-[2vh] md:pt-[2vw] lg:p-[2.1vw] flex flex-col gap-[1vh] md:gap[.8vw] lg:gap-[.9vw]">

      {/* Mobiles category */}

      <div className="md:hidden w-full lg:hidden ">
         <ul className="flex gap-[1vw] overflow-y-hidden overflow-x-auto overflow-scroll [scrollbar-width:none] [-ms-overflow-style:none]">
      {menuItems.map((item) => (
        <Link href={item.href} key={item.href}>
          <li
            onClick={() => setSelected(item.href)}
            className={`px-[2vw] py-[.5vw] rounded-full bg-green-200 ${
              selected === item.href ? 'border-2 border-prime' : 'border-2 border-zinc-300'
            } text-center flex items-center justify-center text-[1.5vh] text-medium text-zinc-700 transition-all duration-300 ease-in-out`}
          >
            {item.label}
          </li>
        </Link>
      ))}
    </ul>
      </div>

      {/* Headline */}

      <div className="headline select-none overflow-hidden flex justify-between items-center">


        <div className="head-text">
        <h2 className="text-[2.6vh] md:text-[2.7vw] lg:text-[2.7vw] font-semibold text-zinc-700 leading-none">Your Next Tech Obsession </h2>
        <h2 className="text-xl md:text-[2.5vw] lg:text-[2.5vw] font-semibold text-zinc-700 leading-none flex overflow-hidden">Starts Here – <motion.div 
        initial={{opacity:0,x:80}} animate={{opacity:1,x:0}} transition={{duration:.5,ease:'easeInOut'}} className="bg-gradient-to-r from-prime to-emerald-500 text-transparent bg-clip-text"> Blonify.</motion.div></h2>

        <p className="text-sm md:text-[1vw] lg:text-[1vw] text-zinc-700 block mt-[1vh] md:mt-[1vw] lg:mt-[1vw]">Your daily dose of smart tech starts here.</p></div>

         <div className="h-[7vh] w-[7vh] md:w-[10vw] lg:w-[10vw] md:h-[10vw] lg:h-[10vw] flex items-center justify-center relative duration-700 overflow-hidden">
         <svg
            viewBox="0 0 200 200"
            width="full"
            height="full"
            className="text-4xl md:text-2xl lg:text-2xl tracking-widest animate-spin [animation-duration:3.5s]"
          >
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%">
                Blonify •
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
                Blonify •
              </textPath>
            </text>
          </svg>

          <button className="absolute top-0 left-0 right-0 bottom-0 m-auto w-[4vh] h-[4vh] md:w-[4vw] md:h-[4vw] lg:w-[4vw] lg:h-[4vw] bg-prime rounded-full flex items-center justify-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="50"
              height="50"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <line x1="6" y1="18" x2="18" y2="6" />
              <polyline points="9 6 18 6 18 15" />
            </svg>
          </button>
      </div>

      </div>

      {/* Desktop Category */}

      <div className="category-search hidden md:flex lg:flex w-full border-2 border-prime md:px-[.4vw] md:py-[.2vw] lg:px-[.4vw] lg:py-[.2vw] rounded-full items-center gap-[.6vw] relative select-none">
        <div className="category">
          <ul className="flex gap-[.4vw]">
            {menuItems.map((item) => (
              <Link href={item.href} key={item.href}>
                <li
                  onClick={() => setSelected(item.href)}
                  className={`px-[1vw] py-[.3vw] rounded-full bg-green-200
                   text-center flex items-center justify-center text-[1vw] text-medium text-zinc-700 ease-in-out hover:bg-green-400 hover:text-white transition-all duration-300 border-1 border-prime cursor-pointer`}
                >
                  {item.label}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        <div className="search h-[2.2vw] w-full relative flex items-center justify-end">
          <input 
                type="text" 
                placeholder='Search...'
                className={`relative px-[1.5vw] pt-[.4vw] pb-[.2vw] w-full  bg-white outline-none rounded-full transition-all duration-300 border-2 border-green-400 text-zinc-700 h-full`}
                name='search'
            />

            <div className=" rounded-full absolute right-0 top-0 bg-prime w-[2.5vw] flex items-center justify-center h-full cursor-pointer"><Search className='text-white'/></div>
        </div>
      </div>

      <FeaturedPost/>

      <h4 className="text-[1.8vh] md:text-[1.5vw] lg:text-[1.5vw] font-medium  text-zinc-700">Recent Posts</h4>

      <PostList/>

    </div>
  )
}

export default page