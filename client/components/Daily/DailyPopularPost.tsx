import React from 'react'
import ImageKit from '../Image'

const DailyPopulaPost = () => {
  return (

      <div className="p-[.5vh] w-[48%] md:p-[.5vw] lg:p-[.5vw] relative rounded-xl bg-gradient-to-b from-zinc-100 to-emerald-200 transition-all duration-300 ease-linear hover:scale-102 cursor-pointer">
            <ImageKit src={'https://ik.imagekit.io/8jagcyqun/default-image.jpg?updatedAt=1747192787254'} alt="About" className="w-full h-[18vh] md:w-full md:h-[17vw] lg:w-full lg:h-[18vw] rounded-xl object-cover" w={700} h={700} />

            <div className="pt-[.3vh] md:pt-[.4vw] lg:pt-[.4vw] flex gap-[1vh] md:gap-[1vw] justify-between md:justify-start">
                <h1 className='text-[1.2vh] md:text-[1.2vw] lg:text-[1.2vw] font-second text-zinc-700 leading-none cursor-pointer hover:underline font-semibold'>Samsung Galaxy S23Galaxy S23Samsung Galaxy</h1>

                <span className='text-zinc-500 text-[.8vh] md:text-[.8vw] lg:text-[.8vw] w-[10vh] md:w-[11vw] lg:w-[11vw] font-second '>2 days ago</span>
            </div>

             <p className=' md:text-[1vw] lg:text-[1vw] font-second font-medium text-zinc-700 hidden md:block w-[30vw] leading-none mt-[1vh]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,</p>

           <div className="flex gap-[1vh] md:gap-[1vw] lg:gap-[1vw] pb-[.3vh] md:pb-[.3vw] pl-[.2vh] pt-[.5vh]">
            <p className='text-[.8vh] md:text-[.8vw] lg:text-[.8vw] font-second text-zinc-500 cursor-pointer hover:underline'>Written by <span className='text-prime'>Kunal Singh</span></p>

            <div className="px-[.4vh] md:px-[.3vw] lg:px-[.4vw] rounded-full text-white bg-prime cursor-pointer text-[.7vh] md:text-[.7vw] lg:text-[.8vw] text-center">Read more</div>
           </div>
       </div>

  )
}

export default DailyPopulaPost