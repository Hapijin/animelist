'use client'

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

export default function InputSearch() {
    const searchRef = useRef()
    const router = useRouter()
    const handleSearch = () => {

        event.preventDefault()
        const keyword = searchRef.current.value
        if(keyword.trim() == "") {return null} 
        else { 
            router.push(`/search/${keyword}`)
        }
        
    }
    return(
        <div className="relative">
            <form>

            <input placeholder="Search Anime..." ref={searchRef}
            className="w-full rounded-full p-2" />
            <button className="absolute end-2 top-2 " onClick={handleSearch}>
                <MagnifyingGlass size={24} weight="bold"/>
            </button>
            </form>
        </div>
    )
}