import IsLaptop from '@/components/Laptop/IsLaptop'
import Recent from '@/components/Laptop/Recent'
import React from 'react'

const page = () => {
  return (
    <div className='w-full flex flex-col min-h-screen px-[1vh] md:px-[13vw] lg:px-[15vw] pt-[1vh] md:pt-[1.5vw] lg:pt-[1.6vw]'>
        <IsLaptop/>


        <div className='mt-[2vh] md:mt-[1vw] lg:mt-[1vw] overflow-hidden'>

        <div className="flex gap-[1vh] md:h-[5vh] lg:h-[5vh] h-[3vh] "> 
            <div className='bg-prime h-full md:w-[2vh] w-[1vh] rounded-md'></div>
             <h1 className='text-[2vh] md:text-[1.5vw] lg:text-[1.5vw] font-semibold text-zinc-600 '>Recent Post</h1> 
        </div>

        <div className="mt-[1vh] md:mt-[1vw] lg:mt-[1vw] flex flex-col gap-[1vh] md:gap-[.5vw] lg:gap-[.6vw]">
            <Recent/>
            <Recent/>
            <Recent/>
            <Recent/>
            <Recent/>
            <Recent/>
            <Recent/>
            <Recent/>
        </div>
        
    </div>
    </div>
  )
}

export default page