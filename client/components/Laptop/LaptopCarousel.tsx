import React from 'react'

const LaptopCarousel = () => {
  return (
    <div className="p-[.5vh] md:p-[.5vw] lg:p-[.5vw] relative rounded-xl bg-gradient-to-b from-zinc-100 to-green-200">
            <img src={'https://ik.imagekit.io/8jagcyqun/default-image.jpg?updatedAt=1747192787254'} alt="About" className="w-full h-[24vh] md:w-full md:h-[15vw] lg:w-full lg:h-[16vw] rounded-xl object-cover" />

            <div className="pt-[1vh] md:pt-[.4vw] lg:pt-[.4vw] flex gap-[1vh] md:gap-[1vw] justify-between md:justify-start px-[.8vh]">
                <h1 className='text-[1.2vh] md:text-[1.2vw] lg:text-[1.2vw] font-second text-zinc-700 leading-none cursor-pointer hover:underline'>Samsung Galaxy S23Galaxy S23Samsung Galaxy</h1>

                <span className='text-zinc-500 text-[.8vh] md:text-[.8vw] lg:text-[.8vw] w-[10vh] md:w-[11vw] lg:w-[11vw] font-second '>2 days ago</span>
            </div>

           <div className="flex gap-[1vh] md:gap-[1vw] lg:gap-[1vw] pb-[.3vh] md:pb-[.3vw] pl-[.2vh] ">
            <p className='text-[.8vh] md:text-[.8vw] lg:text-[.8vw] font-second text-zinc-500 px-[.8vh]'>Written by <span className='text-prime'>Kunal Singh</span></p>

            <div className="px-[.4vh] md:px-[.3vw] lg:px-[.4vw] rounded-full text-white bg-prime cursor-pointer text-[.7vh] md:text-[.7vw] lg:text-[.8vw] text-center">Read more</div>
           </div>
       </div>
  )
}

export default LaptopCarousel