import React from "react";
import { API } from "aws-amplify";
import * as queries from "../graphql/queries";
import { ListPostsQuery, Post } from "../API";
import PostPreview from "../components/post/PostPreview";

interface IProps {
  posts: Post[];
}

function Home({ posts }: IProps) {
  return (
    <>
      <div className="flex flex-col m-auto gap-4 max-w-lg">
        {posts &&
          posts.map((post) => <PostPreview key={post.id} post={post} />)}
        {!posts.length && <h2>There are no posts yet</h2>}
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const results = (await API.graphql({
    query: queries.listPosts,
  })) as { data: ListPostsQuery; errors: any[] };

  const posts = results.data.listPosts.items as Post[];
  return {
    props: {
      posts,
      revalidate: 30,
    },
  };
}

export default Home;
