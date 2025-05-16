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
import FeaturedCarsol from './FeaturedCarsol';

const FeaturedPost = () => {
  

  return (
    <div className='w-full md:w-full lg:w-full md:h-[31vw] lg:h-[31vw] py-[1vh] md:py-[.1vw] lg:py-[.1vw] lg:flex md:flex gap-[3vh] md:gap-[.5vw] lg:gap-[.5vw] flex flex-col md:flex-row lg:flex-row relative select-none'>
        {/* first post */}

        <Carousel   plugins={[
           Autoplay({
             delay: 2000,
           }),
          ]} className='w-full md:w-full lg:w-full'>
          <CarouselContent>
            <CarouselItem>
              <FeaturedCarsol/>
            </CarouselItem>

             <CarouselItem>
              <FeaturedCarsol/>
            </CarouselItem>

             <CarouselItem>
              <FeaturedCarsol/>
            </CarouselItem>
          </CarouselContent>
           <CarouselPrevious className='hidden md:block lg:block cursor-pointer'/>
           <CarouselNext className='hidden md:block lg:block cursor-pointer'/>
        </Carousel>

    </div>
  )
}

export default FeaturedPost