"use client"
import React, { useEffect, useState } from 'react'
import Pagination from '@/components/Utilities/Pagination'
import HeaderMenu from '@/components/Utilities/HeaderMenu'
import AnimeList from '@/components/AnimeList'
import { getAnimeResponse } from '../../libs/api-libs'

export default function Page() {
  const [page, setPage] = useState({page: 1})
  const [topAnime, setTopAnime] = useState([])

  const fetchData = async () => {
    // const response = await fetch
    // (`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`)

    const data = await getAnimeResponse("top/anime", `page=${page.page}&limit=24`)
    setTopAnime(data)
  }

  useEffect(() => {
    fetchData()
  }, [page])

  const lastPage = topAnime.pagination?.last_visible_page
  
  return (
    <>
    <HeaderMenu title={`TOP POPULAR ANIME #${page.page}`}/>
    <Pagination setPage={setPage}
      page={page.page} lastPage={lastPage}  />
      <AnimeList api={topAnime} />
    
      <Pagination setPage={setPage}
      page={page.page} lastPage={lastPage} />
   
    </>
  )
}
