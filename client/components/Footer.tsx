import Link from 'next/link'
import React from 'react'

const Footer = () => {

    const QuickLinks = [
    { label: "About", href: "/about" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "Disclaimer", href: "/disclaimer" },
    { label: "Contact Us", href: "/contact-us" },
    ]

    const Category =[
    { label: "Daily", href: "/daily" },
    { label: "Mobiles", href: "/mobiles" },
    { label: "Laptops", href: "/laptops" },
    
    ]

  return (
    <footer className='w-full pt-[3vh] md:pt-[3vw] px-[1vh] md:px-[13vw] lg:px-[15vw] mb-[1vh] md:mb-[1vw] flex flex-col gap-[1.3vh] md:gap-[1vw]'>
        <div className="flex gap-[1vw] items-center w-full">
            <Link href="/"><div  className={`nav-logo hidden md:flex lg:flex md:gap-[.5vw] lg:gap-[.5vw] items-center select-none w-[10vw]`}>
            <img src="/logo.svg" alt="logo" className='w-[3vw] h-[3vw] '/>
            <h6 className='font-second text-[2.2vw]  text-zinc-700'>Blonify</h6>
            </div></Link>

            <form className='w-full flex gap-[.5vh] md:gap-[.5vw]'>
                <input type="email" placeholder='Enter your email' className='w-full h-[3.2vh] md:h-[2.5vw] outline-none border-2 border-prime rounded-full px-[1vh] md:px-[1vw] bg-zinc-100'/>

                <button type='submit' className=" px-[1vh] rounded-xl md:px-[1vw] text-[1.2vh] md:text-[.8vw] text-white bg-gradient-to-l from-prime to-green-700 cursor-pointer">Subscribe</button>
            </form>
        </div>

        <div className="px-[1vh] md:px-[2vw] flex md:gap-[2vw] gap-0">

            <div className="md:w-[15vw] w-1/2">

            <h4 className='text-[1.8vh] md:text-[1.5vw] lg:text-[1.5vw] font-medium text-zinc-700 pb-[1vh] md:pb-[.5vw] lg:pb-[.5vw]'>Quick Links</h4>

            <ul className='flex rounded-full md:px-[.2vw] md:py-[.1vw] lg:px-[.2vw] lg:py-[.1vw] flex-col gap-[.3vh] md:gap-[.3vw] lg:gap-[.3vw]'>
                
                {QuickLinks.map((item)=>(
                    <Link href={item.href} key={item.href}>
                        <li className='text-[1.3vh] md:text-[1vw] lg:text-[1.1vw] px-[.7vw] py-[.2vw] rounded-full font-medium text-zinc-700 group hover:bg-green-200 transition-all duration-300 overflow-hidden leading-[2vh] md:leading-[1.4vw]'>
                                {item.label}

                             <div className="group-hover:translate-x-0 group-hover:opacity-100 w-full h-[2px] bg-zinc-700 transition-all duration-300 -translate-x-full opacity-0"></div>
                        </li>
                    </Link>
                ))}

            </ul>

           </div>

           <div className="md:w-[10vw] w-1/2">

            <h4 className='text-[1.8vh] md:text-[1.5vw] lg:text-[1.5vw] font-medium text-zinc-700 pb-[1vh] md:pb-[.5vw] lg:pb-[.5vw]'>Categories</h4>

            <ul className='flex rounded-full md:px-[.2vw] md:py-[.1vw] lg:px-[.2vw] lg:py-[.1vw] flex-col gap-[.3vh] md:gap-[.3vw] lg:gap-[.3vw]'>
                
                {Category.map((item)=>(
                    <Link href={item.href} key={item.href}>
                        <li className='text-[1.3vh] md:text-[1vw] lg:text-[1.1vw] px-[.7vw] py-[.2vw] rounded-full font-medium text-zinc-700 group hover:bg-green-200 transition-all duration-300 overflow-hidden leading-[2vh] md:leading-[1.4vw]'>
                                {item.label}

                             <div className="group-hover:translate-x-0 group-hover:opacity-100 w-full h-[2px] bg-zinc-700 transition-all duration-300 -translate-x-full opacity-0"></div>
                        </li>
                    </Link>
                ))}

            </ul>

           </div>
        </div>

        <div className="text-[1vh] md:text-[.8vw] text-zinc-600 text-center ">
            <p>© 2025 Blonify. All rights reserved.</p>
        </div>

        
    </footer>
  )
}

export default Footer