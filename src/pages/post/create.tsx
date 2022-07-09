import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Alert from "../../components/form/Alert";
import FormInput from "../../components/form/Input";
import FormText from "../../components/form/TextArea";
import { Auth, Storage, API } from "aws-amplify";
import { createPost } from "../../graphql/mutations";
import { CreatePostInput } from "../../API";
import { useRouter } from "next/router";
import Spinner from "../../components/Spinner";
import DropZone from "../../components/form/DropZone";
import awsExports from "../../aws-exports";
import Progress from "../../components/form/Progress";
import { withAuthenticator } from "@aws-amplify/ui-react";

const schema = yup.object({
  title: yup.string().required("Post title is required").max(120, {
    message: "Post title length must be less or equal to 120 characters",
  }),
  content: yup.string().required("Post content is required"),
});

interface IFormInputs {
  title: string;
  content: string;
  image: any;
}

type Props = {
  authenticated: boolean;
};

const CreatePost = ({ authenticated }: Props) => {
  const [postErrorMessage, setPostErrorMessage] = useState("");
  const [file, setFile] = useState<File>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [fileUploadProgress, setFileUploadProgress] = useState(0);
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
      };

      if (file) {
        const visibility = "public";
        const { identityId } = await Auth.currentCredentials();
        const filename = `/${visibility}/${identityId}/${Date.now()}-${
          file.name
        }`;
        console.log(file.type);
        const upladedFile = await Storage.put(filename, {
          contentType: file.type,
          progressCallback(progress) {
            console.log(progress);
            setFileUploadProgress(progress.loaded / progress.total);
          },
        });

        const newImage = {
          key: upladedFile.key,
          bucket: awsExports.aws_user_files_s3_bucket,
          region: awsExports.aws_user_files_s3_bucket_region,
        };

        input.image = newImage;
      }

      await API.graphql({
        query: createPost,
        variables: { input },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });

      router.push("/");
    } catch (error) {
      console.log(error);
      setPostErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <Spinner />}
      <h1>New Post</h1>
      {postErrorMessage && (
        <Alert
          type="error"
          message={postErrorMessage}
          onDismess={() => setPostErrorMessage("")}
          className="my-3"
        />
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="false"
        className=" max-w-lg m-auto"
      >
        <div className="flex flex-col justify-left items-center">
          <FormInput
            type="text"
            name="title"
            label="title"
            register={register}
            error={errors.title && errors.title.message}
          />
          <FormText
            name="content"
            label="Content"
            rows={5}
            register={register}
            error={errors.content && errors.content.message}
          />

          {fileUploadProgress > 0 && <Progress progress={fileUploadProgress} />}
          <DropZone
            numberOfFiles={1}
            onFileDrop={(files: File[]) => setFile(files[0])}
          />
          <button
            className=" mt-8 w-full inline-block px-7 py-3 bg-gray-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default withAuthenticator(CreatePost);
