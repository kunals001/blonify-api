import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import SearchBar from './SearchBar'

const DesktopCategories = ({posts}:any) => {

    const menuItems = [
    { label: "Daily", href: "/daily" },
    { label: "Mobiles", href: "/mobiles" },
    { label: "Laptops", href: "/laptops" },
  ];

  const [selected, setSelected] = useState("/");

  return (
    <div className="category-search hidden md:flex lg:flex w-full border-1 border-prime md:px-[.2vw] md:py-[.2vw] lg:px-[.2vw] lg:py-[.2vw] rounded-full items-center gap-[.6vw] relative select-none">
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

        <SearchBar query={''} onChange={function (value: string): void {
        throw new Error('Function not implemented.')
          } }/>
      </div>
  )
}

export default DesktopCategories