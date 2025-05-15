"use client"
import ProtectedAdminRoute from '@/components/AdminProtect'
import SunEditorComponent from '@/components/Draft'
import { LetterText, SquarePen } from 'lucide-react'
import React, { useRef } from 'react'

const page = () => {
    const filePickref = useRef<HTMLInputElement>(null);

  return (
    <ProtectedAdminRoute>
        <div className='w-full min-h-screen md:px-[13vw] lg:px-[15vw] md:pt-[2vw] lg:p-[2.1vw] flex flex-col md:gap[.8vw] lg:gap-[.9vw]'>
            <h1 className='text-[3vh] md:text-[2vw] lg:text-[2vw] select-none mx-auto font-semibold text-center bg-gradient-to-r from-prime to-emerald-500 text-transparent bg-clip-text'>
                Create A Post
            </h1>

            <form className='flex flex-col w-full mt-[1vh] md:mt-[.8vw] lg:mt-[.8vw] gap-[.6vw]'>
                <div className="relative w-full flex items-center justify-center">
                    <input type="name" placeholder="Title" className='w-full px-[2.5vh] md:px-[2vw] lg:px-[2vw] outline-none py-[1vh] md:py-[.5vw] lg:py-[.5vw] rounded-xl text-[1.3vh] md:text-[1vw] lg:text-[1vw] bg-zinc-100 border-1 border-prime font-second font-medium text-zinc-700 relative' />

                    <LetterText className='absolute text-prime left-0 pl-[.5vh] md:pl-[.5vw] lg:pl-[.5vw] cursor-pointer size-6 md:size-8 lg:size-8'/>

                    <div className="w-[8vw] pl-[.5vw] ">
                        <select className='px-[.5vw] py-[.5vw] outline-none rounded-xl bg-zinc-100 text-[1vw] cursor-pointer h-[2.7vw] border-1 border-prime w-full'>
                          <option value='uncategorized'>Category </option>
                          <option value='Mobiles'>Mobiles</option>
                          <option value='Laptops'>Laptops</option>
                          <option value='Watches'>Watches</option>
                        </select>
                    </div>
                </div>

                 <div className="relative w-full flex items-center justify-center">
                    <textarea  placeholder="Description" className='w-full px-[2.5vh] md:px-[2vw] lg:px-[2vw] outline-none py-[1vh] md:py-[.5vw] lg:py-[.5vw] rounded-xl text-[1.3vh] md:text-[1vw] lg:text-[1vw] bg-zinc-100 border-1 border-prime font-second font-medium text-zinc-700 relative resize-none' />

                    <SquarePen className='absolute text-prime left-0 top-0 pl-[.5vh] md:pl-[.5vw] lg:pl-[.5vw] cursor-pointer size-6 md:size-10 lg:size-9 pt-[.6vw] block'/>
                </div>

                <div className="w-full flex items-center justify-between  px-[2.5vh] md:px-[2vw] lg:px-[2vw] outline-none py-[1vh] md:py-[.5vw] lg:py-[.5vw] rounded-xl text-[1.3vh] md:text-[1vw] lg:text-[1vw] bg-zinc-100 border-1 border-prime font-second font-medium text-zinc-700 relative">
                    <input ref={filePickref} type="file" className='w-1/2 outline-none rounded-xl text-[1.3vh] md:text-[1vw] lg:text-[1vw] bg-zinc-100 ' />

                    <button onClick={() => filePickref.current?.click()} className='text-xl px-[.5vw] rounded-lg border-zinc-500 border-2 cursor-pointer bg-second text-prime'>Upload Image</button>
                </div>

                <SunEditorComponent/>

                <button 
                className='mt-5 w-full py-3 px-4 bg-gradient-to-r  from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:from-green-600hover:to-emerald-700 outline-none focus:ring-2 focus:ring-green-500  transition duration-200 cursor-pointer'
					type='submit'
                >
					Post
				</button>
                
            </form>
        </div>
    </ProtectedAdminRoute>
  )
}

export default page