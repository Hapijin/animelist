
import Link from "next/link"
import InputSearch from "./InputSearch"
import UserActionButton from "./UserActionButton"

export default function Navbar(){
    return(
        <header className="bg-color-accent p-4">
            <div className="flex md:flex-row flex-col justify-between gap-2 md:items-center">
                <Link className="text-2xl font-bold text-white" href="/">ANILIST</Link>
                <InputSearch />
                <UserActionButton />
                </div>
        </header>
    )
}