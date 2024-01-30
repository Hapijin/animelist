import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"
import { getAnimeResponse, getNestedAnimeReponse, reproduce } from "../libs/api-libs"
import { RecommendList } from "@/components/AnimeList/Recommended"

export default async function Page() {

  const topAnime = await getAnimeResponse("top/anime", "limit=12")
  let recommendedAnime = await getNestedAnimeReponse("recommendations/anime", "entry")
  recommendedAnime =  {data : reproduce(recommendedAnime).slice(0, 10)}
  
  // recommendedAnime = { data : recommendedAnime.splice(Math.floor(Math.random()*recommendedAnime.length + 1 ) + 1, 8)}
  // console.log(recommendedAnime)
  
  return (
    <div className="">
      <section className="">

      <Header title="Top Anime" linkHref="/popular" linkTitle="Show All" />
      <AnimeList api={topAnime}/>
      </section>
      <section className="">

      <Header title="Recommended Anime" linkHref="/popular"  />
      <RecommendList api={recommendedAnime}/>
      </section>
    </div>
  )
}