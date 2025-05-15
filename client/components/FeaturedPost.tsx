import React from 'react'
import ImageKit from '@/components/Image';
import Link from 'next/link';
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const FeaturedPost = () => {
  

  return (
    <div className='w-full md:w-full lg:w-full md:h-[31vw] lg:h-[31vw] py-[1vh] md:py-[.1vw] lg:py-[.1vw] lg:flex md:flex gap-[3vh] md:gap-[.5vw] lg:gap-[.5vw] flex flex-col md:flex-row lg:flex-row relative overflow-hidden'>
        {/* first post */}

        <Carousel   plugins={[
           Autoplay({
             delay: 2000,
           }),
          ]} className='w-full md:w-full lg:w-full'>
          <CarouselContent>
            <CarouselItem className='relative overflow-hidden rounded-xl'>
              <ImageKit src={'https://ik.imagekit.io/8jagcyqun/default-image.jpg?updatedAt=1747192787254'}
              alt="About"
              className="w-full relative h-[24vh] md:w-full md:h-[31vw] lg:w-full lg:h-[31vw] rounded-xl object-cover overflow-hidden"
              w={750}
              h={750}
              />

              <div className="absolute bottom-0 w-full md:h-[5vw] h-[6vh] flex gap-[1vh] rounded-b-xl md:px-[1vw] px-[1vh] md:py-[1vw] py-[1vh] items-center bg-gradient-to-b from-transparent to-zinc-700 ">
                <h1 className='text-[1.6vh] md:text-[1.7vw] lg:text-[1.7vw] font-second hover:underline leading-none cursor-pointer font-semibold bg-gradient-to-r from-prime to-emerald-500 text-transparent bg-clip-text'>Samsung S23 ultra</h1>
              </div>

            </CarouselItem>
          </CarouselContent>
           <CarouselPrevious className='hidden md:flex items-center justify-center bg-prime cursor-pointer h-[3vw] border-zinc-600 border-2 text-[1vw] lg:flex  absolute left-0  '/>
           <CarouselNext className='hidden md:flex items-center justify-center bg-prime cursor-pointer h-[3vw] border-zinc-600 border-2 text-[1vw] lg:flex  absolute right-0'/>
        </Carousel>

    </div>
  )
}

export default FeaturedPost