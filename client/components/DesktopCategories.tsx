import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { Search } from 'lucide-react'

const DesktopCategories = () => {

    const menuItems = [
    { label: "Daily", href: "/daily" },
    { label: "Mobiles", href: "/mobiles" },
    { label: "Laptops", href: "/laptops" },
    { label: "Watches", href: "/watches" },
    { label: "Tools", href: "/tools" },
    { label: "Compare", href: "/compare" },
  ];

  const [selected, setSelected] = useState("/");

  return (
    <div className="category-search hidden md:flex lg:flex w-full border-2 border-prime md:px-[.4vw] md:py-[.2vw] lg:px-[.4vw] lg:py-[.2vw] rounded-full items-center gap-[.6vw] relative select-none">
        <div className="category">
          <ul className="flex gap-[.4vw]">
            {menuItems.map((item) => (
              <Link href={item.href} key={item.href}>
                <li
                  onClick={() => setSelected(item.href)}
                  className={`px-[1vw] py-[.3vw] rounded-full bg-green-200
                   text-center flex items-center justify-center text-[1vw] text-medium text-zinc-700 ease-in-out hover:bg-green-400 hover:text-white transition-all duration-300 border-1 border-prime cursor-pointer`}
                >
                  {item.label}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        <div className="search h-[2.2vw] w-full relative flex items-center justify-end">
          <input 
                type="text" 
                placeholder='Search...'
                className={`relative px-[1.5vw] pt-[.4vw] pb-[.2vw] w-full  bg-white outline-none rounded-full transition-all duration-300 border-2 border-green-400 text-zinc-700 h-full`}
                name='search'
            />

            <div className=" rounded-full absolute right-0 top-0 bg-prime w-[2.5vw] flex items-center justify-center h-full cursor-pointer"><Search className='text-white'/></div>
        </div>
      </div>
  )
}

export default DesktopCategories