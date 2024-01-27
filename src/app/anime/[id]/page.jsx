import { getAnimeResponse, getGenres } from '@/libs/api-libs'
import React from 'react'
import Image from "next/image"
import VideoPlayer from '@/components/Utilities/VideoPlayer'

export default async function Page({params: {id}}) {

    const anime = await getAnimeResponse(`anime/${id}` )
    let genre = await getGenres(`anime/${id}`, "name")
    genre = genre.join(", ")
    
    return (
    <div>
        <div className='pt-4 px-4'>

            <h3 className='text-2xl text-color-primary'>{anime.data.title}</h3>

        </div>
        <div className='gap-4 pt-4 px-4 justify-center flex flex-row flex-wrap text-color-primary border-1'>
            <Image src={anime.data.images.webp.image_url} alt={anime.data.images.jpg.image_url}
                width={250} height={250} className='rounded'
             />
            <div className='flex-col flex-wrap'>
                 <p>Rating: {anime.data.rating}</p>
                 <p>Genre: {genre}</p>
                 <p>Rating {anime.data.rating}</p>
                 <p>Rating {anime.data.rating}</p>
                 <p>Rating {anime.data.rating}</p>
            </div>
        </div>
        <div>
            <VideoPlayer youtubeId={anime.data.trailer.youtube_id}/>
        </div>
    </div>
  )
}
