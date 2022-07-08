import React from "react";
import { Comment } from "../../API";
import PostHeader from "./PostHeader";

type Props = {
  comment: Comment;
};

export default function CommentPreview({ comment }: Props) {
  return (
    <div className="w-full flex flex-col items-start justify-items-start my-4 rounded-lg shadow-lg bg-white">
      <PostHeader
        owner={comment.owner}
        createdAt={comment.createdAt}
        showJoinButton={false}
      />
      <p className="px-4">{comment.content}</p>
    </div>
  );
}
