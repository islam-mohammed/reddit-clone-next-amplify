import { Storage } from "aws-amplify";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Post } from "../../API";
import PostHeader from "./PostHeader";
import Vote from "./Vote";

type Props = {
  post: Post;
};

export default function PostPreview({ post }: Props) {
  const router = useRouter();
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    console.log(post.image);
    if (post.image?.key) {
      const getImage = async () => {
        try {
          const url = await Storage.get(post.image.key);
          console.log(url);
          setImageUrl(url);
        } catch (error) {
          console.log(error.message);
        }
      };
      getImage();
    }
  }, []);

  const handleClick = () => router.push(`/post/${post.id}`);
  return (
    <>
      <div className="w-full flex flex-col justify-items-start lg:flex-row-reverse  rounded-lg shadow-lg bg-white">
        <div
          className="w-full flex flex-col justify-start items-start cursor-pointer"
          onClick={handleClick}
        >
          <PostHeader owner={post.owner} createdAt={post.createdAt} />
          <h3 style={{ marginTop: 0, marginLeft: 45 }}>{post.title}</h3>
          <div className="w-full">
            {imageUrl && (
              <Image
                src={imageUrl}
                width={450}
                height={350}
                layout="intrinsic"
                className="m-auto"
              />
            )}
          </div>
          <p className="p-4">{post.content}</p>
        </div>
        <div className="w-full lg:w-10 bg-slate-100">
          <Vote voteDown={post.downVotes} voteUp={post.upVotes} />
        </div>
      </div>
    </>
  );
}
