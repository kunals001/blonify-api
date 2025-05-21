import React from 'react'
import DailyRecentPost from './DailyRecentPost'

const DailyRecent = ({posts}: {posts: any}) => {
  const filteredPosts = posts.filter(
    (post: any) => post.category === "daily"
  );
  return (
    <div className='mt-[2vh] md:mt-[1vw] lg:mt-[1vw] overflow-hidden'>

        <div className="flex gap-[1vh] md:h-[5vh] lg:h-[5vh] h-[3vh] "> 
            <div className='bg-prime h-full md:w-[2vh] w-[1vh] rounded-md'></div>
             <h1 className='text-[2vh] md:text-[1.5vw] lg:text-[1.5vw] font-semibold text-zinc-600 '> Recent Article</h1> 
        </div>

        {posts.length > 0 ? (
            <div className="mt-[1vh] md:mt-[1vw] lg:mt-[1vw] flex flex-col gap-[1vh] md:gap-[.5vw] lg:gap-[.6vw]">
                {filteredPosts.map((post: any, index: number) => (
                    <DailyRecentPost key={index} post={post} />
                ))}
            </div>
        ) : (
           <h1>No recent article</h1>
        )}
        
    </div>
  )
}

export default DailyRecent