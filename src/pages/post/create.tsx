import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Auth, Storage, API } from "aws-amplify";
import { createPost } from "../../graphql/mutations";
import { CreatePostInput } from "../../API";
import { useRouter } from "next/router";
import DropZone from "../../components/form/DropZone";
import awsExports from "../../aws-exports";
import Progress from "../../components/form/Progress";
import {
  Alert,
  Button,
  Divider,
  Flex,
  Heading,
  TextAreaField,
  TextField,
  useAuthenticator,
} from "@aws-amplify/ui-react";
import PenIcon from "../../components/icons/Pen";
import withCustomAuthenticator from "../../components/hoc/withCustomAuthenticator";

const schema = yup.object({
  title: yup.string().required("Post title is required").max(120, {
    message: "Post title length must be less or equal to 120 characters",
  }),
  content: yup.string().required("Post content is required"),
});

interface IFormInputs {
  title: string;
  content?: string;
  image: any;
}

const CreatePost = () => {
  const [postErrorMessage, setPostErrorMessage] = useState("");
  const [file, setFile] = useState<File>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [fileUploadProgress, setFileUploadProgress] = useState(0);
  const { user } = useAuthenticator((context) => [context.user]);
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IFormInputs>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    setPostErrorMessage("");
    try {
      setIsLoading(true);
      const input: CreatePostInput = {
        title: data.title,
        content: data.content,
        downVotes: 0,
        upVotes: 0,
        owner: user.username,
      };

      const savePost = async () => {
        await API.graphql({
          query: createPost,
          variables: { input },
          authMode: "AMAZON_COGNITO_USER_POOLS",
        });
      };

      if (file) {
        const visibility = "public";
        const { identityId } = await Auth.currentCredentials();
        const filename = `/${visibility}/${identityId}/${Date.now()}-${
          file.name
        }`;
        const upladedFile = await Storage.put(filename, file, {
          contentType: file.type,
          progressCallback(progress) {
            setFileUploadProgress(progress.loaded / progress.total);
          },
          async completeCallback(event) {
            const newImage = {
              key: upladedFile.key,
              bucket: awsExports.aws_user_files_s3_bucket,
              region: awsExports.aws_user_files_s3_bucket_region,
            };
            input.image = newImage;
            await savePost();
          },
        });
      } else {
        await savePost();
      }
      router.push("/");
    } catch (error) {
      console.log(error);
      setPostErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="false">
      <Flex
        gap="1rem"
        direction="column"
        backgroundColor="white"
        padding="large"
      >
        <Flex direction="row">
          <Heading level={4}>New Post</Heading>
          <PenIcon />
        </Flex>
        <Divider orientation="horizontal" />
        {postErrorMessage && (
          <Alert variation="error">{postErrorMessage}</Alert>
        )}
        <TextField
          label="Title"
          type="text"
          {...register("title")}
          {...(errors.title && {
            hasError: !!errors.title,
            errorMessage: errors.title.message,
          })}
        />
        <TextAreaField
          label="Content"
          {...register("content")}
          size="small"
          {...(errors.content && {
            hasError: !!errors.content,
            errorMessage: errors.content.message,
          })}
        />

        {fileUploadProgress > 0 && <Progress progress={fileUploadProgress} />}
        <DropZone
          numberOfFiles={1}
          onFileDrop={(files: File[]) => setFile(files[0])}
        />
        <Button variation="primary" type="submit" isLoading={isLoading}>
          Save
        </Button>
      </Flex>
    </form>
  );
};

export default withCustomAuthenticator(CreatePost);
