import {
  Card,
  Flex,
  Heading,
  Text,
  useAuthenticator,
  useTheme,
  View,
} from "@aws-amplify/ui-react";
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
  const { tokens } = useTheme();
  const { user } = useAuthenticator((context) => [context.user]);

  useEffect(() => {
    console.log(post.image);
    if (post.image?.key) {
      const getImage = async () => {
        try {
          const url = await Storage.get(post.image.key);
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
    <View backgroundColor={tokens.colors.background.secondary}>
      <Card variation="elevated" padding={0}>
        <Flex direction={{ base: "column", large: "row-reverse" }}>
          <Flex
            direction="column"
            justifyContent="start"
            width="100%"
            style={{ cursor: "pointer" }}
            onClick={handleClick}
            padding="15px"
          >
            <PostHeader owner={post.owner} createdAt={post.createdAt} />
            <Heading level={4}>{post.title}</Heading>

            {imageUrl && (
              <Flex direction="column" border="2px solid #f9f9f9">
                <Image
                  src={imageUrl}
                  width={450}
                  height={300}
                  layout="responsive"
                  className="m-auto object-contain"
                />
              </Flex>
            )}
            <Text>{post.content}</Text>
          </Flex>
          {user && (
            <Flex
              direction={{ base: "row", large: "column" }}
              backgroundColor={tokens.colors.neutral[10]}
              paddingLeft={{ base: "20px", large: "0" }}
            >
              <Vote voteDown={post.downVotes} voteUp={post.upVotes} />
            </Flex>
          )}
        </Flex>
      </Card>
    </View>
  );
}
