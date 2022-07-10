import React, { useEffect } from "react";
import { API, graphqlOperation, withSSRContext } from "aws-amplify";
import * as queries from "../graphql/queries";
import { ListPostsQuery, Post } from "../API";
import PostPreview from "../components/post/PostPreview";
import {onCreatePost}  from "../graphql/subscriptions";

import {Observable} from 'rxjs'
import { useAuthenticator } from "@aws-amplify/ui-react";

interface IProps {
  posts: Post[];
}

function Home({ posts }: IProps) {
  useEffect(() => {
    const subscription = (API.graphql(
    graphqlOperation(onCreatePost)
    )as unknown as Observable<object>).subscribe(console.log);
    return () => {
      subscription.unsubscribe()
    }
  }, [])
  

  return (
    <>
      <div className="flex flex-col m-auto gap-4 max-w-lg">
        {posts &&
          posts.map((post) => <PostPreview key={post.id} post={post} />)}
        {!posts.length && <h2>There are no posts yet</h2>}
      </div>
    </>,
  )
}

export async function getStaticProps(context) {
  const SSR = withSSRContext()
  const results = (await SSR.API.graphql({
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
