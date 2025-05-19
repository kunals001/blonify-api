import React from 'react'

const Recent = () => {
  return (
    <div className='w-full'>
        <div className="flex gap-[1vh] md:gap-[.5vw] lg:gap-[.5vw]">
            <img src='https://ik.imagekit.io/8jagcyqun/default-image.jpg?updatedAt=1747192787254' alt="About" className="w-[16vh] h-[10vh] md:w-[25vw] md:h-[16vw] lg:w-[25vw] lg:h-[16vw] rounded-xl object-cover" />

            <div className=" flex pt-[1vh] md:pt-[1vw] lg:pt-[1vw] flex-col gap-[.3vh] md:gap-[1vw] lg:gap-[1vw]px-[.3vh] md:px-[.4vh] lg:px-[.5vw] py-[.2vh] md:py-[.3vw] lg:py-[.3vw]">
                <h1 className='text-[1.6vh] md:text-[1.7vw] lg:text-[1.7vw] font-second font-semibold text-zinc-700 hover:underline leading-none cursor-pointer w-[27vh] md:w-[42vw] lg:w-[42vw]'>Lorem ipsum dolor sit amet  elit. Excepturi hic labore,</h1>

                <p className=' md:text-[1vw] lg:text-[1vw] font-second font-medium text-zinc-700 hidden md:block  md:w-[40vw] lg:w-[40vw] leading-none'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,</p>

                <div className="flex gap-[1.3vh] md:gap-[1vw] lg:gap-[1vw] pb-[.3vh] md:pb-[.3vw] pl-[.2vh] ">
                    <p className='text-[1.3vh] md:text-[.8vw] lg:text-[.8vw] font-second text-zinc-500'>Written by <span className='text-prime'>Kunal Singh</span></p>

                    

                    <div className="px-[.4vh] md:px-[.3vw]  lg:px-[.4vw] rounded-full text-white bg-prime cursor-pointer leading-none flex items-center justify-center"><p className='block  mt-[.7vw] md:mt-0 text-[1vh] md:text-[.7vw] lg:text-[.8vw]'>Read more</p></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Recent