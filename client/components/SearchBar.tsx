import { Search } from 'lucide-react'
import React from 'react'

const SearchBar = ({ query, onChange }: { query: string; onChange: (value: string) => void }) => {
  return (
    <div className="search h-[2.2vw] w-full relative flex items-center justify-end">
      <input
        type="text"
        placeholder="Search..."
        className="relative px-[1.5vw] pt-[.4vw] pb-[.2vw] w-full bg-white outline-none rounded-full transition-all duration-300 border-2 border-green-400 text-zinc-700 h-full"
        name="search"
        value={query}
        onChange={(e) => onChange(e.target.value)}
      />
      <div className="rounded-full absolute right-0 top-0 bg-prime w-[2.5vw] flex items-center justify-center h-full cursor-pointer">
        <Search className="text-white" />
      </div>
    </div>
  )
}

export default SearchBar
