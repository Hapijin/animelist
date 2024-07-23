"use client";
import { authUserSession } from "@/libs/auth-libs";
import { Star } from "@phosphor-icons/react";
import prisma from "@/libs/prisma";

export default async function StarButton({ api }) {
  // const user = await authUserSession()
  // const anime_mal_id = api.mal_id
  // const user_email = user.user_email
  // const data = { anime_mal_id, user_email }
  // const response = await fetch("/api/v1/collection", {
  //     method: "POST",
  //     body: JSON.stringify(data)
  // })

  // console.log(user.user_email)

  // const comments = await prisma.comment.findMany();
  return (
    <div>
      <Star size={24} weight="light" className="absolute pb-0.5" />
    </div>
  );
}
