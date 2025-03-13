"use client"

import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { setBookSearch } from "@/lib/slices/app"

const SearchBar = () => {
    const { bookSearch } = useAppSelector(state => state.app)
    const dispatch = useAppDispatch()
    
    return (
        <div className="w-full flex items-center justify-center mt-4">
            <div className="w-full max-w-7xl flex items-center gap-2 px-2">
                <input
                    placeholder="Search"
                    className="p-2 border-[1px] border-gray-200 rounded-md w-full"
                    value={bookSearch} 
                    onChange={e => dispatch(setBookSearch(e.currentTarget.value))}
                />
            </div>
        </div>
    )
}

export default SearchBar
