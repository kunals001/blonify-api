import DailyPopular from "@/components/Daily/DailyPopular"
import DailyRecent from "@/components/Daily/DailyRecent"
import DailyTrending from "@/components/Daily/DailyTrending"

const page = () => {
  return (
    <div className='w-full flex flex-col min-h-screen px-[1vh] md:px-[13vw] lg:px-[15vw] pt-[1vh] md:pt-[1.5vw] lg:pt-[1.6vw]'>
       <DailyTrending/>

       <DailyRecent/>

       <DailyPopular/>
    </div>
  )
}

export default page