import React from 'react'
import ImageKit from './Image'

const FeaturedCarsol = () => {
  return (
    <div  className='relative overflow-hidden rounded-xl'>
        <ImageKit src={'https://ik.imagekit.io/8jagcyqun/default-image.jpg?updatedAt=1747192787254'}
              alt="About"
              className="w-full relative h-[24vh] md:w-full md:h-[31vw] lg:w-full lg:h-[31vw] rounded-xl object-cover overflow-hidden"
              w={750}
              h={750}
              />

              <div className="absolute bottom-0 w-full md:h-[5vw] h-[6vh] flex gap-[1vh] rounded-b-xl md:px-[1vw] px-[1vh] md:py-[1vw] py-[1vh] items-center bg-gradient-to-b from-transparent to-zinc-700 ">
                <h1 className='text-[1.6vh] md:text-[1.7vw] lg:text-[1.7vw] font-second hover:underline leading-none cursor-pointer font-semibold bg-gradient-to-r from-prime to-emerald-500 text-transparent bg-clip-text'>Samsung S23 ultra</h1>
            </div>
    </div>
  )
}

export default FeaturedCarsol