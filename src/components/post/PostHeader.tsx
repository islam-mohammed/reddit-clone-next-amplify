import {
  Button,
  Flex,
  Image,
  Text,
  useAuthenticator,
  useTheme,
} from "@aws-amplify/ui-react";
import { useRouter } from "next/router";
import React from "react";
import Moment from "react-moment";

type Props = {
  owner: string;
  createdAt: string;
  showJoinButton?: boolean;
  className?: string;
};

export default function PostHeader({ owner, createdAt, className }: Props) {
  const { user } = useAuthenticator((context) => [context.user]);
  const router = useRouter();
  const { tokens } = useTheme();
  return (
    <Flex direction="column">
      <Flex
        direction="row"
        justifyContent="space-between"
        alignItems="start"
        padding="12px"
      >
        <Flex direction="row" alignItems="start">
          <Image
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            borderRadius="50%"
            width="32px"
            alt="avatar"
          />
          <Flex wrap="wrap">
            <Text fontWeight={tokens.fontWeights.bold}>{owner}</Text>
            <Text>
              {" "}
              created{" "}
              <Moment interval={1000} fromNow>
                {createdAt}
              </Moment>
            </Text>
          </Flex>
        </Flex>
        {!user && (
          <Button
            type="button"
            variation="primary"
            size="small"
            borderRadius={20}
            onClick={(e) => {
              e.stopPropagation();
              router.push("/profile");
            }}
          >
            Join
          </Button>
        )}
      </Flex>
    </Flex>
  );
}
