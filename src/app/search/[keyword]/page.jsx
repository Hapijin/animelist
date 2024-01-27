import { getAnimeResponse } from "@/libs/api-libs"
import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"
import Link from "next/link"

export default async function Page({params}) {
    const {keyword} = params
    const decodedKeyword = decodeURI(keyword)

    // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedKeyword}`)

    const getAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`)
    
    return (
        <>
        <section>

        <Header title={`Search result for ${decodedKeyword}`} />
        <AnimeList api={getAnime}/>
        </section>
        </>
    )
}