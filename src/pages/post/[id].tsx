import { withSSRContext } from "aws-amplify";
import { useRouter } from "next/router";
import React from "react";
import { GetPostQuery, ListPostsQuery, Post } from "../../API";
import CommentPreview from "../../components/post/CommentPreview";
import PostPreview from "../../components/post/PostPreview";
import Spinner from "../../components/Spinner";
import * as queries from "../../graphql/queries";

type Props = {
  post: Post;
};

export default function PostDetails({ post }: Props) {
  const router = useRouter();
  if (router.isFallback) {
    return <Spinner />;
  }

  return (
    <div className="flex flex-col w-full lg:w-[700px]">
      {post && <PostPreview key={post.id} post={post} />}
      <h4>Comments</h4>
      {post.comments &&
        post.comments.items.map((comment) => (
          <CommentPreview key={comment.id} comment={comment} />
        ))}

      {!post.comments.items.length && <h5>No comments were found</h5>}
    </div>
  );
}

export async function getStaticPaths() {
  const SSR = withSSRContext();
  const results = (await SSR.API.graphql({
    query: queries.listPosts,
  })) as { data: ListPostsQuery; errors: any[] };

  const posts = results.data.listPosts.items as Post[];
  const paths = posts.map((post) => {
    return {
      params: {
        id: post.id,
      },
    };
  });
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const SSR = withSSRContext();
  const results = (await SSR.API.graphql({
    query: queries.getPost,
    variables: { id: params.id },
  })) as { data: GetPostQuery; errors: any[] };
  const post = results.data.getPost as Post;
  return { props: { post }, revalidate: 60000 };
}
