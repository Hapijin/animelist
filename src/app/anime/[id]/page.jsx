import { getAnimeResponse, getGenres } from '@/libs/api-libs'
import React from 'react'
import Image from "next/image"
import VideoPlayer from '@/components/Utilities/VideoPlayer'
import CollectionButton from '@/components/AnimeList/CollectionButton'
import { authUserSession } from '@/libs/auth-libs'
import prisma from '@/libs/prisma'

export default async function Page({params: {id}}) {

    const anime = await getAnimeResponse(`anime/${id}` )
    const user = await authUserSession()
    let genre = await getGenres(`anime/${id}`, "name")
    genre = genre.join(", ")
    const collection = await prisma.collection.findFirst({
        where : { user_email: user?.email, anime_mal_id: id}
    })
     
    console.log(anime.data.background)
    return (
    <div className='flex flex-col justify-center items-center'>
        <div className='pt-4 px-4'>
            
            <h3 className='text-2xl text-color-primary'>{anime.data.title} 
             {`${anime.data.year}` == "null" ? null
             :
             <pre className='inline-block font-sans'> - ({anime.data.year})
             </pre>
             }
             </h3>
            
            
            {!collection && user &&
            <CollectionButton anime_mal_id={id} user_email={user?.email}/>
            }
            </div>
        <div className='gap-4 pt-4 px-4 justify-center flex flex-row flex-wrap text-color-primary border-1'>
            <Image src={anime.data.images.webp.image_url} alt={anime.data.images.jpg.image_url}
                width={250} height={250} className='rounded'
             />
            <div className='flex-col flex-wrap text-sm md:text-md'>
                 <p>Rating: {anime.data.rating}</p>
                 <p>Genre: {genre}</p>
                 <p>Rating {anime.data.rating}</p>
                 <p>Rating {anime.data.rating}</p>
                 <p>Rating {anime.data.rating}</p>
            </div>
        </div>
        <div className='max-w-screen-lg px-4 flex flex-col gap-2 justify-center items-center'>
            { `${anime.data.background}` === "null" ? <p className='mt-2 text-color-primary italic font-light'>" - "</p>
            :
            <p className='mt-2 text-color-primary italic font-light'>"{anime.data.background}"</p>
            }
            <div className='font-light mt-2'>

            
            <h4 className='text-color-primary '>SYNOPSIS</h4>
            <p className='text-color-primary line-clamp-3'>{anime.data.synopsis} </p>
            </div>
        </div>
        <div>
            <VideoPlayer youtubeId={anime.data.trailer.youtube_id}/>
        </div>
    </div>
  )
}
