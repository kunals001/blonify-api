import React from 'react'
import DailyPopularPost from './DailyPopularPost'

const DailyPopular = () => {
  return (
    <div className='mt-[2vh] md:mt-[1vw] lg:mt-[1vw]'>

         <div className="flex gap-[1vh] md:h-[5vh] lg:h-[5vh] h-[3vh] "> 
            <div className='bg-prime h-full md:w-[2vh] w-[1vh] rounded-md'></div>
             <h1 className='text-[2vh] md:text-[1.5vw] lg:text-[1.5vw] font-semibold text-zinc-600 '>Popular</h1> 
        </div>

        <div className="flex flex-wrap w-full gap-[1vh] md:gap-[1vw] gap-y-2 mt-2 md:mt-4 lg:mt-4">
          <DailyPopularPost />
          <DailyPopularPost />
          <DailyPopularPost />
          <DailyPopularPost />
        </div>

    </div>
  )
}

export default DailyPopular