import React from 'react'

const checkbox = () => {
  return (
    <div>
        <p className='text-[1.2vw] text-zinc-700 font-second'>Filter:</p>
        <div className="flex items-center gap-[.5vw]">
              <input type="checkbox" className='w-[1vw] h-[1vw] rounded-sm cursor-pointer' />
              <span className='text-[1vw] text-zinc-700 font-second'>Mobiles</span>
            </div>

            <div className="flex items-center gap-[.5vw]">
              <input type="checkbox" className='w-[1vw] h-[1vw] rounded-sm cursor-pointer' />
              <span className='text-[1vw] text-zinc-700 font-second'>Laptops</span>
            </div>

            <div className="flex items-center gap-[.5vw]">
              <input type="checkbox" className='w-[1vw] h-[1vw] rounded-sm cursor-pointer' />
              <span className='text-[1vw] text-zinc-700 font-second'>Watches</span>
            </div>

            <div className="flex items-center gap-[.5vw]">
              <input type="checkbox" className='w-[1vw] h-[1vw] rounded-sm cursor-pointer' />
              <span className='text-[1vw] text-zinc-700 font-second'>Trending</span>
            </div>

    </div>
  )
}

export default checkbox