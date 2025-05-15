import React from 'react'


const Comment = () => {
  return (
    <div className='w-full px-[.5vh] md:px-[.5vw] lg:px-[.5vw] py-[1vh] md:py-[.5vw] lg:py-[.5vw] rounded-xl bg-zinc-100'>
      <div className="flex gap-[.5vh] md:gap-[.5vw] lg:gap-[.6vw] items-center  text-center">
      <img src={'https://ik.imagekit.io/8jagcyqun/default-image.jpg?updatedAt=1747192787254'}
        alt="About"
        className="w-[2.8vh] md:w-[2vw] lg:w-[2vw] h-[2.8vh] md:h-[2vw] lg:h-[2vw] rounded-full object-cover"
        />

        <p className='text-[.8vh] md:text-[.7vw] lg:text-[.7vw] text-zinc-800  font-second text-center'>Name</p>

        <p className='text-[.8vh] md:text-[.7vw] lg:text-[.7vw] text-red-400  font-second text-center cursor-pointer'>Delet Comment</p>

        <p className='text-[.8vh] md:text-[.7vw] lg:text-[.7vw] text-zinc-500  font-second text-center'>2 days ago</p>
        </div>

        <p className='text-[1vh] md:text-[1vw] lg:text-[1vw] text-zinc-800  font-second pt-[.5vh] md:pt-[.4vw] lg:pt-[.4vw] leading-none'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.</p>

    </div>
  )
}

export default Comment