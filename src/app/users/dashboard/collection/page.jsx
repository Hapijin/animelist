import React from "react";
import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/libs/auth-libs";
import Content from "./content";
import prisma from "@/libs/prisma";
import Link from "next/link";
import Image from "next/image";

export default async function Page() {
  const user = await authUserSession();
  const collection = await prisma.collection.findMany({
    where: { user_email: user.email },
  });
  console.log(collection);
  return (
    <>
      <section className="p-4 ">
        <Header title="My Anime Collection" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {collection?.map((collect, index) => {
            return (
              <Link
                key={collect.id}
                href={`/anime/${collect.anime_mal_id}`}
                className=" border-color-accent relative overflow-hidden hover:opacity-85 "
              >
                <Image
                  src={collect.anime_image}
                  alt={collect.anime_image}
                  width={350}
                  height={350}
                  className="w-full h-full "
                />
                <div className="absolute flex bottom-0 w-full bg-color-secondary h-16 justify-center items-center bg-opacity-80 p-4">
                  <h5 className="text-color-primary font-medium text-lg ">
                    {collect.anime_title}
                  </h5>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
