"use client"
import FeaturedPost from "@/components/FeaturedPost"
import PostList from "@/components/PostList"
import DesktopCategories from "@/components/DesktopCategories"
import WebHeadline from "@/components/WebHeadline"
import MobileCategories from "@/components/MobileCategories"


const page = () => {

 

  return (
    <div className="w-full min-h-screen px-[1vh] md:px-[13vw] lg:px-[15vw] pt-[2vh] md:pt-[2vw] lg:p-[2.1vw] flex flex-col gap-[1vh] md:gap[.8vw] lg:gap-[.9vw]">

      {/* Mobiles category */}

      <MobileCategories/>

      {/* Headline */}

      <WebHeadline/>

      {/* Desktop Category */}

      <DesktopCategories/>

      {/* Featured Post */}

      <FeaturedPost/>

      <h4 className="text-[1.8vh] md:text-[1.5vw] lg:text-[1.5vw] font-medium  text-zinc-700">Recent Posts</h4>

      <PostList/>

    </div>
  )
}

export default page