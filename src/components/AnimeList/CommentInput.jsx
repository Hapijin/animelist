"use client";

import { useState } from "react";

export default function CommentInput({
  anime_mal_id,
  user_email,
  username,
  anime_title,
}) {
  const [comment, setComment] = useState("");
  const [isCreated, setIsCreated] = useState(false);

  const handleInput = (event) => {
    setComment(event.target.value);
  };

  const handlePosting = async (event) => {
    event.preventDefault();

    const data = { anime_mal_id, user_email, comment, username, anime_title };

    const response = await fetch("/api/v1/comment", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const postComment = await response.json();
    if (postComment.isCreated) {
      setIsCreated(true);
      setComment("");
    }
    return;
  };
  return (
    <div className="grid gap-2 p-4 ">
      {isCreated && <p className="text-color-primary">Comment posted</p>}
      <textarea
        onChange={handleInput}
        placeholder="Type your comment"
        value={comment}
        className="h-32 text-lg w-full p-3"
      />
      <button onClick={handlePosting} className=" bg-color-secondary p-2 ">
        <p className="text-color-primary">Post Comment</p>
      </button>
    </div>
  );
}
