import { Send } from 'lucide-react'
import React from 'react'
import ImageKit from './Image';

const ShareLinks = ({className}: {className?: string}) => {
  return (
    <div className={className}>
        <p className='text-[1.7vh] md:text-[1.1vw] text-zinc-700 gap-[.5vh] flex flex-row  items-center '>Share <Send className='size-4 md:size-6 text-prime'/></p>

        <div className="md:w-[10vw] w-full flex md:flex-col flex-row md:px-[.5vw] rounded-md  cursor-pointer gap-[.5vh] md:gap-[.3vw]">
            <p className='flex rounded-md hover:bg-green-200 gap-[.2vw]'>
                <ImageKit src={'https://ik.imagekit.io/8jagcyqun/icons8-instagram-logo.svg?updatedAt=1747225348664'} alt="share" className="w-[2vh] h-[2vh] md:w-[1.5vw] md:h-[1.5vw] rounded-sm object-cover cursor-pointer" w={50} h={50} />

                <span className='hidden md:block text-[.9vw] text-zinv-700'>Instagram</span>
            </p>

            <p className='flex rounded-md hover:bg-green-200 gap-[.2vw]'>
                <ImageKit src={'https://ik.imagekit.io/8jagcyqun/icons8-facebook.svg?updatedAt=1747225348707'} alt="share" className="w-[2vh] h-[2vh] md:w-[1.5vw] md:h-[1.5vw] rounded-sm object-cover cursor-pointer" w={50} h={50} />

                <span className='hidden md:block text-[.9vw] text-zinv-700'>Facebook</span>
            </p>

            <p className='flex rounded-md hover:bg-green-200 gap-[.2vw]'>
                <ImageKit src={'https://ik.imagekit.io/8jagcyqun/icons8-whatsapp.svg?updatedAt=1747225348817'} alt="share" className="w-[2vh] h-[2vh] md:w-[1.5vw] md:h-[1.5vw] rounded-sm object-cover cursor-pointer" w={50} h={50} />

                <span className='hidden md:block text-[.9vw] text-zinv-700'>Whatsapp</span>
            </p>
        </div>
    </div>
  )
}

export default ShareLinks