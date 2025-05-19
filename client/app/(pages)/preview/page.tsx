import MobilePostPage from '@/components/Mobile/MobilePostPage'
import SuggestedPosts from '@/components/SuggestedPosts'
import React from 'react'

const page = () => {
  return (
    <div className='w-full flex flex-col md:flex-row min-h-screen px-[1vh] md:px-[13vw] lg:px-[15vw] gap-[1vh] md:gap-[.5vw] lg:gap-[.6vw]'>
        <MobilePostPage/>

        <div className="w-full md:w-[35vw]">
          <SuggestedPosts/>
        </div>
    </div>
  )
}

export default page