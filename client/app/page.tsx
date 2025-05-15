"use client"
import FeaturedPost from "@/components/FeaturedPost"
import PostList from "@/components/PostList"
import DesktopCategories from "@/components/DesktopCategories"
import WebHeadline from "@/components/WebHeadline"
import MobileCategories from "@/components/MobileCategories"
import Navigate from "@/components/navigate"
import { Share } from "lucide-react"
import ShareLinks from "@/components/ShareLinks"


const page = () => {

 

  return (
    <div className="w-full min-h-screen px-[1vh] md:px-[13vw] lg:px-[15vw] pt-[2vh] md:pt-[2vw] lg:p-[2.1vw] flex flex-col gap-[1vh] md:gap[.8vw] lg:gap-[.9vw]">

      <Navigate/>

      {/* Mobiles category */}

      <MobileCategories/>

      {/* Headline */}

      <WebHeadline/>

      <ShareLinks className="md:hidden lg:hidden flex md:flex-col flex-row gap-[1vh] md:gap-[.5vw] items-center md:items-start"/>

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