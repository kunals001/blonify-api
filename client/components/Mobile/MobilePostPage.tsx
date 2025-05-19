import React from 'react'

const MobilePostPage = () => {
  return (
    <div className='w-full'>
        <div className="flex flex-col gap-[.4vh] md:gap-[.2vw] lg:gap-[.2vw] py-[2vh] md:py-[1.1vw] lg:py-[1.2vw] px-[.2vh] md:px-[.5vw] lg:px-[.5vw]">
            <h1 className='text-[2.3vh] md:text-[1.7vw] lg:text-[1.7vw] font-semibold text-zinc-700 leading-none'>Samsung S23 Ultra</h1>

            <p className='text-[1.2vh] md:text-[.8vw] lg:text-[.8vw] font-second font-medium text-zinc-700 pt-[.6vh] md:pt-[.5vw] lg:pt-[.6vw]'>Written by <span className='text-prime'> Kunal Singh </span> on <span className='text-gray-500'>1/2/2025</span></p>

        </div>

        <div className="w-full">
            <div className="w-full px-[1vh] md:px-[.9vw] py-[.5vh] md:py-[.5vw] bg-prime text-white font-second text-[1.4vh] md:text-[1.2vw] lg:text-[1.3vw] font-semibold rounded-t-xl">Samsung S23</div>
            <div className="w-full px-[1vh] md:px-[.9vw] py-[.5vh] md:py-[.5vw] bg-gradient-to-b from-prime to-green-200 text-white font-second text-[1.4vh] md:text-[1.2vw] lg:text-[1.3vw] font-semibold rounded-b-xl pb-[.5vh] md:pb-[.5vw]">
                <div className="pb-[.5vh] md:pb-[.5vw]">
                    <img src="https://ik.imagekit.io/8jagcyqun/default-image.jpg?updatedAt=1747192787254" alt="" className='w-[10vh] h-[15vh] md:w-[10vw] md:h-[15vw] lg:w-[10vw] lg:h-[15vw] object-cover rounded-md' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default MobilePostPage