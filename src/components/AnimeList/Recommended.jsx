import Image from "next/image"
import Link from "next/link"

export function RecommendList({ api }){
   
    return(
        <div className="px-4">


            <div className="grid gap-4 grid-flow-col-dense overflow-visible">
            
            {api.data?.map((anime) =>{
                return (
                    <Link key={anime.mal_id} href={`/anime/${anime.mal_id}`} 
                    className="cursor-pointer text-color-primary hover:text-color-accent transition-all">
            <Image className="w-full h-full max-h-64"
             src={anime.images.webp.image_url} width={100} height={100} alt="..." />
            {/* <h2 className="font-bold md:text-xl text-md p-4"> {anime.title}</h2> */}
            </Link>
            )
        })}
        </div>
        </div>
    )

}

export default RecommendList