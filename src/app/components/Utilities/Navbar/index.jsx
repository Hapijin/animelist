import Link from "next/link"

export default function Navbar(){
    return(
        <header className="bg-blue-500 p-4">
            <div className="flex md:flex-row flex-col justify-between gap-2">
                <Link className="text-2xl font-bold text-white" 
                href="/">ANILIST</Link>
                <input placeholder="Search Anime..." />
                </div>
        </header>
    )
}