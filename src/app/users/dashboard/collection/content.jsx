import React from "react";
import { getAnimeResponse } from "@/libs/api-libs";
import Link from "next/link";
import Image from "next/image";

export default async function Content({ api }) {
  const anime = await getAnimeResponse(`anime/${api.anime_mal_id}`);

  return (
    <>
      <Link
        key={anime.data.id}
        href={`/anime/${anime.data.mal_id}`}
        className="border-2 border-color-accent relative overflow-hidden hover:opacity-70 "
      >
        <Image
          src={anime.data.images.webp.image_url}
          alt=""
          width={350}
          height={350}
          className="w-full h-full "
        />
        <div className="absolute flex bottom-0 w-full bg-color-accent h-16 ">
          <h5 className="text-color-primary justify-center items-center">
            {anime.data.title}
          </h5>
        </div>
      </Link>
    </>
  );
}
