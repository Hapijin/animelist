"use client";
import { getAnimeResponse, getGenres } from "@/libs/api-libs";
import React from "react";
import Image from "next/image";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import CollectionButton from "@/components/AnimeList/CollectionButton";
// import { authUserSession } from "@/libs/auth-libs";
// import prisma from "@/libs/prisma";
import CommentInput from "@/components/AnimeList/CommentInput";
import { collection, user } from "@/app/api/v1/collection/route";

export default async function Page({ params: { id } }) {
  const anime = await getAnimeResponse(`anime/${id}`);
  // const user = await authUserSession();
  let genre = await getGenres(`anime/${id}`, "name");
  // console.log(genre);
  // genre = genre.join(", ");
  // const collection = await prisma.collection.findFirst({
  //   where: { user_email: user?.email, anime_mal_id: id },
  // });

  return (
    <div className="mx-4 lg:mx-32">
      <div className="pt-4 px-4">
        {!collection && user && (
          <CollectionButton
            anime_mal_id={id}
            user_email={user?.email}
            anime_image={anime.data.images.webp.image_url}
            anime_title={anime.data.title}
          />
        )}
      </div>
      <div className="grid grid-cols-2 gap-4 pt-4 px-4 justify-center text-color-primary border-1">
        <Image
          src={anime.data.images.webp.image_url}
          alt={anime.data.images.jpg.image_url}
          width={250}
          height={250}
          className="rounded justify-self-end"
        />
        <div className="flex flex-col text-sm md:text-lg gap-3">
          <p>
            <span className="font-bold">{anime.data.type} ● </span>&nbsp;
            {anime.data.rating}
          </p>
          <h3 className="text-2xl text-color-primary font-bold">
            {anime.data.title}
            {`${anime.data.year}` == "null" ? null : (
              <pre className="inline-block font-sans">
                {" "}
                - ({anime.data.year})
              </pre>
            )}
          </h3>
          {/* <p>Genre: {genre}</p> */}
          <div className="flex flex-wrap gap-2">
            {genre.map((genre, index) => (
              <button className="bg-color-secondary p-1" key={index}>
                {genre}
              </button>
            ))}
          </div>
          <p>
            Status: <span className="">{anime.data.status}</span>
          </p>
        </div>
      </div>
      <div className="px-4 flex flex-col gap-2 justify-center items-center">
        {`${anime.data.background}` === "null" && (
          <p className="mt-2 text-color-primary italic font-light">
            "{anime.data.background}"
          </p>
        )}
        <div className="font-light mt-4">
          <h4 className="text-color-primary ">SYNOPSIS</h4>
          <p className="text-color-primary line-clamp-3 overflow-auto">
            {anime.data.synopsis}{" "}
          </p>
        </div>
      </div>
      <div>
        <CommentInput
          anime_mal_id={id}
          user_email={user?.email}
          username={user?.name}
          anime_title={anime.data.title}
        />
      </div>
      <div>
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
    </div>
  );
}
