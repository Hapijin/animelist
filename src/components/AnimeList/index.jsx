'use client'
import Image from "next/image"
import Link from "next/link"
import { Star } from "@phosphor-icons/react"

export function AnimeList({ api }){
    return(
        <div className="px-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 
                        ">
            

        {api.data?.map((anime) =>{
            return (
                <Link key={anime.mal_id} href={`/anime/${anime.mal_id}`} 
                className="cursor-pointer text-color-primary hover:text-color-accent transition-all
                 rounded-lg shadow-sm shadow-color-secondary
                 overflow-hidden">

            <Image className="h-full w-full max-h-56 md:max-h-60 lg:max-h-72 object-cover"
             src={anime.images.webp.image_url} width={500} height={500} alt="..." />
             
            <div className=" content-end flex flex-col gap-2 p-2 ">
                <div> 
                    <p className="font-bold md:text-l text-md line-clamp-2"> {anime.title}</p>
                </div>
                <div>
                    <p className="line-clamp-2 text-sm font-light">{anime.synopsis}</p>
                
                </div>
                <div className="mt-2 overflow-auto">
                    <Star size={24} weight="light" className="absolute pb-0.5"/>
                    <h3 className="pl-7">  {anime.score} • {anime.type} </h3>
                {/* <p className="pr-2 font-extralight ">{anime.rating}</p> */}
                </div>
            

            </div>
            </Link>
            )
        })}
        </div>
    )

}

export default AnimeList