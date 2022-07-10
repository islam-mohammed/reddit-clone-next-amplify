/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePostInput = {
  id?: string | null;
  title: string;
  content: string;
  image?: S3ObjectInput | null;
  upVotes?: number | null;
  downVotes?: number | null;
  tags?: Array<string | null> | null;
  owner: string;
};

export type S3ObjectInput = {
  bucket: string;
  region: string;
  key: string;
};

export type ModelPostConditionInput = {
  title?: ModelStringInput | null;
  content?: ModelStringInput | null;
  upVotes?: ModelIntInput | null;
  downVotes?: ModelIntInput | null;
  tags?: ModelStringInput | null;
  owner?: ModelStringInput | null;
  and?: Array<ModelPostConditionInput | null> | null;
  or?: Array<ModelPostConditionInput | null> | null;
  not?: ModelPostConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type Post = {
  __typename: "Post";
  id: string;
  title: string;
  content: string;
  image?: S3Object | null;
  upVotes?: number | null;
  downVotes?: number | null;
  tags?: Array<string | null> | null;
  comments?: ModelCommentConnection | null;
  owner: string;
  createdAt: string;
  updatedAt: string;
};

export type S3Object = {
  __typename: "S3Object";
  bucket: string;
  region: string;
  key: string;
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection";
  items: Array<Comment | null>;
  nextToken?: string | null;
};

export type Comment = {
  __typename: "Comment";
  id: string;
  content: string;
  post?: Post | null;
  createdAt: string;
  updatedAt: string;
  postCommentsId?: string | null;
  owner?: string | null;
};

export type UpdatePostInput = {
  id: string;
  title?: string | null;
  content?: string | null;
  image?: S3ObjectInput | null;
  upVotes?: number | null;
  downVotes?: number | null;
  tags?: Array<string | null> | null;
  owner?: string | null;
};

export type DeletePostInput = {
  id: string;
};

export type CreateCommentInput = {
  id?: string | null;
  content: string;
  postCommentsId?: string | null;
};

export type ModelCommentConditionInput = {
  content?: ModelStringInput | null;
  and?: Array<ModelCommentConditionInput | null> | null;
  or?: Array<ModelCommentConditionInput | null> | null;
  not?: ModelCommentConditionInput | null;
  postCommentsId?: ModelIDInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateCommentInput = {
  id: string;
  content?: string | null;
  postCommentsId?: string | null;
};

export type DeleteCommentInput = {
  id: string;
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  content?: ModelStringInput | null;
  upVotes?: ModelIntInput | null;
  downVotes?: ModelIntInput | null;
  tags?: ModelStringInput | null;
  owner?: ModelStringInput | null;
  and?: Array<ModelPostFilterInput | null> | null;
  or?: Array<ModelPostFilterInput | null> | null;
  not?: ModelPostFilterInput | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}

export type ModelPostConnection = {
  __typename: "ModelPostConnection";
  items: Array<Post | null>;
  nextToken?: string | null;
};

export type SearchablePostFilterInput = {
  id?: SearchableIDFilterInput | null;
  title?: SearchableStringFilterInput | null;
  content?: SearchableStringFilterInput | null;
  upVotes?: SearchableIntFilterInput | null;
  downVotes?: SearchableIntFilterInput | null;
  tags?: SearchableStringFilterInput | null;
  owner?: SearchableStringFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  and?: Array<SearchablePostFilterInput | null> | null;
  or?: Array<SearchablePostFilterInput | null> | null;
  not?: SearchablePostFilterInput | null;
};

export type SearchableIDFilterInput = {
  ne?: string | null;
  gt?: string | null;
  lt?: string | null;
  gte?: string | null;
  lte?: string | null;
  eq?: string | null;
  match?: string | null;
  matchPhrase?: string | null;
  matchPhrasePrefix?: string | null;
  multiMatch?: string | null;
  exists?: boolean | null;
  wildcard?: string | null;
  regexp?: string | null;
  range?: Array<string | null> | null;
};

export type SearchableStringFilterInput = {
  ne?: string | null;
  gt?: string | null;
  lt?: string | null;
  gte?: string | null;
  lte?: string | null;
  eq?: string | null;
  match?: string | null;
  matchPhrase?: string | null;
  matchPhrasePrefix?: string | null;
  multiMatch?: string | null;
  exists?: boolean | null;
  wildcard?: string | null;
  regexp?: string | null;
  range?: Array<string | null> | null;
};

export type SearchableIntFilterInput = {
  ne?: number | null;
  gt?: number | null;
  lt?: number | null;
  gte?: number | null;
  lte?: number | null;
  eq?: number | null;
  range?: Array<number | null> | null;
};

export type SearchablePostSortInput = {
  field?: SearchablePostSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchablePostSortableFields {
  id = "id",
  title = "title",
  content = "content",
  upVotes = "upVotes",
  downVotes = "downVotes",
  tags = "tags",
  owner = "owner",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc",
}

export type SearchablePostAggregationInput = {
  name: string;
  type: SearchableAggregateType;
  field: SearchablePostAggregateField;
};

export enum SearchableAggregateType {
  terms = "terms",
  avg = "avg",
  min = "min",
  max = "max",
  sum = "sum",
}

export enum SearchablePostAggregateField {
  id = "id",
  title = "title",
  content = "content",
  upVotes = "upVotes",
  downVotes = "downVotes",
  tags = "tags",
  owner = "owner",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}

export type SearchablePostConnection = {
  __typename: "SearchablePostConnection";
  items: Array<Post | null>;
  nextToken?: string | null;
  total?: number | null;
  aggregateItems: Array<SearchableAggregateResult | null>;
};

export type SearchableAggregateResult = {
  __typename: "SearchableAggregateResult";
  name: string;
  result?: SearchableAggregateGenericResult | null;
};

export type SearchableAggregateGenericResult =
  | SearchableAggregateScalarResult
  | SearchableAggregateBucketResult;

export type SearchableAggregateScalarResult = {
  __typename: "SearchableAggregateScalarResult";
  value: number;
};

export type SearchableAggregateBucketResult = {
  __typename: "SearchableAggregateBucketResult";
  buckets?: Array<SearchableAggregateBucketResultItem | null> | null;
};

export type SearchableAggregateBucketResultItem = {
  __typename: "SearchableAggregateBucketResultItem";
  key: string;
  doc_count: number;
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null;
  content?: ModelStringInput | null;
  and?: Array<ModelCommentFilterInput | null> | null;
  or?: Array<ModelCommentFilterInput | null> | null;
  not?: ModelCommentFilterInput | null;
  postCommentsId?: ModelIDInput | null;
};

export type CreatePostMutationVariables = {
  input: CreatePostInput;
  condition?: ModelPostConditionInput | null;
};

export type CreatePostMutation = {
  createPost?: {
    __typename: "Post";
    id: string;
    title: string;
    content: string;
    image?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    upVotes?: number | null;
    downVotes?: number | null;
    tags?: Array<string | null> | null;
    comments?: {
      __typename: "ModelCommentConnection";
      items: Array<{
        __typename: "Comment";
        id: string;
        content: string;
        createdAt: string;
        updatedAt: string;
        postCommentsId?: string | null;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    owner: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput;
  condition?: ModelPostConditionInput | null;
};

export type UpdatePostMutation = {
  updatePost?: {
    __typename: "Post";
    id: string;
    title: string;
    content: string;
    image?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    upVotes?: number | null;
    downVotes?: number | null;
    tags?: Array<string | null> | null;
    comments?: {
      __typename: "ModelCommentConnection";
      items: Array<{
        __typename: "Comment";
        id: string;
        content: string;
        createdAt: string;
        updatedAt: string;
        postCommentsId?: string | null;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    owner: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeletePostMutationVariables = {
  input: DeletePostInput;
  condition?: ModelPostConditionInput | null;
};

export type DeletePostMutation = {
  deletePost?: {
    __typename: "Post";
    id: string;
    title: string;
    content: string;
    image?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    upVotes?: number | null;
    downVotes?: number | null;
    tags?: Array<string | null> | null;
    comments?: {
      __typename: "ModelCommentConnection";
      items: Array<{
        __typename: "Comment";
        id: string;
        content: string;
        createdAt: string;
        updatedAt: string;
        postCommentsId?: string | null;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    owner: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput;
  condition?: ModelCommentConditionInput | null;
};

export type CreateCommentMutation = {
  createComment?: {
    __typename: "Comment";
    id: string;
    content: string;
    post?: {
      __typename: "Post";
      id: string;
      title: string;
      content: string;
      image?: {
        __typename: "S3Object";
        bucket: string;
        region: string;
        key: string;
      } | null;
      upVotes?: number | null;
      downVotes?: number | null;
      tags?: Array<string | null> | null;
      comments?: {
        __typename: "ModelCommentConnection";
        nextToken?: string | null;
      } | null;
      owner: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    postCommentsId?: string | null;
    owner?: string | null;
  } | null;
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput;
  condition?: ModelCommentConditionInput | null;
};

export type UpdateCommentMutation = {
  updateComment?: {
    __typename: "Comment";
    id: string;
    content: string;
    post?: {
      __typename: "Post";
      id: string;
      title: string;
      content: string;
      image?: {
        __typename: "S3Object";
        bucket: string;
        region: string;
        key: string;
      } | null;
      upVotes?: number | null;
      downVotes?: number | null;
      tags?: Array<string | null> | null;
      comments?: {
        __typename: "ModelCommentConnection";
        nextToken?: string | null;
      } | null;
      owner: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    postCommentsId?: string | null;
    owner?: string | null;
  } | null;
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput;
  condition?: ModelCommentConditionInput | null;
};

export type DeleteCommentMutation = {
  deleteComment?: {
    __typename: "Comment";
    id: string;
    content: string;
    post?: {
      __typename: "Post";
      id: string;
      title: string;
      content: string;
      image?: {
        __typename: "S3Object";
        bucket: string;
        region: string;
        key: string;
      } | null;
      upVotes?: number | null;
      downVotes?: number | null;
      tags?: Array<string | null> | null;
      comments?: {
        __typename: "ModelCommentConnection";
        nextToken?: string | null;
      } | null;
      owner: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    postCommentsId?: string | null;
    owner?: string | null;
  } | null;
};

export type GetPostQueryVariables = {
  id: string;
};

export type GetPostQuery = {
  getPost?: {
    __typename: "Post";
    id: string;
    title: string;
    content: string;
    image?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    upVotes?: number | null;
    downVotes?: number | null;
    tags?: Array<string | null> | null;
    comments?: {
      __typename: "ModelCommentConnection";
      items: Array<{
        __typename: "Comment";
        id: string;
        content: string;
        createdAt: string;
        updatedAt: string;
        postCommentsId?: string | null;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    owner: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListPostsQueryVariables = {
  id?: string | null;
  filter?: ModelPostFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  sortDirection?: ModelSortDirection | null;
};

export type ListPostsQuery = {
  listPosts?: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      content: string;
      image?: {
        __typename: "S3Object";
        bucket: string;
        region: string;
        key: string;
      } | null;
      upVotes?: number | null;
      downVotes?: number | null;
      tags?: Array<string | null> | null;
      comments?: {
        __typename: "ModelCommentConnection";
        nextToken?: string | null;
      } | null;
      owner: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type PostsByOwnerQueryVariables = {
  owner: string;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelPostFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type PostsByOwnerQuery = {
  postsByOwner?: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      content: string;
      image?: {
        __typename: "S3Object";
        bucket: string;
        region: string;
        key: string;
      } | null;
      upVotes?: number | null;
      downVotes?: number | null;
      tags?: Array<string | null> | null;
      comments?: {
        __typename: "ModelCommentConnection";
        nextToken?: string | null;
      } | null;
      owner: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type SearchPostsQueryVariables = {
  filter?: SearchablePostFilterInput | null;
  sort?: Array<SearchablePostSortInput | null> | null;
  limit?: number | null;
  nextToken?: string | null;
  from?: number | null;
  aggregates?: Array<SearchablePostAggregationInput | null> | null;
};

export type SearchPostsQuery = {
  searchPosts?: {
    __typename: "SearchablePostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      content: string;
      image?: {
        __typename: "S3Object";
        bucket: string;
        region: string;
        key: string;
      } | null;
      upVotes?: number | null;
      downVotes?: number | null;
      tags?: Array<string | null> | null;
      comments?: {
        __typename: "ModelCommentConnection";
        nextToken?: string | null;
      } | null;
      owner: string;
      createdAt: string;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
    total?: number | null;
    aggregateItems: Array<{
      __typename: "SearchableAggregateResult";
      name: string;
      result:
        | (
            | {
                __typename: "SearchableAggregateScalarResult";
                value: number;
              }
            | {
                __typename: "SearchableAggregateBucketResult";
                buckets?: Array<{
                  __typename: string;
                  key: string;
                  doc_count: number;
                } | null> | null;
              }
          )
        | null;
    } | null>;
  } | null;
};

export type GetCommentQueryVariables = {
  id: string;
};

export type GetCommentQuery = {
  getComment?: {
    __typename: "Comment";
    id: string;
    content: string;
    post?: {
      __typename: "Post";
      id: string;
      title: string;
      content: string;
      image?: {
        __typename: "S3Object";
        bucket: string;
        region: string;
        key: string;
      } | null;
      upVotes?: number | null;
      downVotes?: number | null;
      tags?: Array<string | null> | null;
      comments?: {
        __typename: "ModelCommentConnection";
        nextToken?: string | null;
      } | null;
      owner: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    postCommentsId?: string | null;
    owner?: string | null;
  } | null;
};

export type ListCommentsQueryVariables = {
  id?: string | null;
  filter?: ModelCommentFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  sortDirection?: ModelSortDirection | null;
};

export type ListCommentsQuery = {
  listComments?: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      content: string;
      post?: {
        __typename: "Post";
        id: string;
        title: string;
        content: string;
        upVotes?: number | null;
        downVotes?: number | null;
        tags?: Array<string | null> | null;
        owner: string;
        createdAt: string;
        updatedAt: string;
      } | null;
      createdAt: string;
      updatedAt: string;
      postCommentsId?: string | null;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type OnCreatePostSubscriptionVariables = {
  owner?: string | null;
};

export type OnCreatePostSubscription = {
  onCreatePost?: {
    __typename: "Post";
    id: string;
    title: string;
    content: string;
    image?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    upVotes?: number | null;
    downVotes?: number | null;
    tags?: Array<string | null> | null;
    comments?: {
      __typename: "ModelCommentConnection";
      items: Array<{
        __typename: "Comment";
        id: string;
        content: string;
        createdAt: string;
        updatedAt: string;
        postCommentsId?: string | null;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    owner: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdatePostSubscriptionVariables = {
  owner?: string | null;
};

export type OnUpdatePostSubscription = {
  onUpdatePost?: {
    __typename: "Post";
    id: string;
    title: string;
    content: string;
    image?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    upVotes?: number | null;
    downVotes?: number | null;
    tags?: Array<string | null> | null;
    comments?: {
      __typename: "ModelCommentConnection";
      items: Array<{
        __typename: "Comment";
        id: string;
        content: string;
        createdAt: string;
        updatedAt: string;
        postCommentsId?: string | null;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    owner: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeletePostSubscriptionVariables = {
  owner?: string | null;
};

export type OnDeletePostSubscription = {
  onDeletePost?: {
    __typename: "Post";
    id: string;
    title: string;
    content: string;
    image?: {
      __typename: "S3Object";
      bucket: string;
      region: string;
      key: string;
    } | null;
    upVotes?: number | null;
    downVotes?: number | null;
    tags?: Array<string | null> | null;
    comments?: {
      __typename: "ModelCommentConnection";
      items: Array<{
        __typename: "Comment";
        id: string;
        content: string;
        createdAt: string;
        updatedAt: string;
        postCommentsId?: string | null;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    owner: string;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateCommentSubscriptionVariables = {
  owner?: string | null;
};

export type OnCreateCommentSubscription = {
  onCreateComment?: {
    __typename: "Comment";
    id: string;
    content: string;
    post?: {
      __typename: "Post";
      id: string;
      title: string;
      content: string;
      image?: {
        __typename: "S3Object";
        bucket: string;
        region: string;
        key: string;
      } | null;
      upVotes?: number | null;
      downVotes?: number | null;
      tags?: Array<string | null> | null;
      comments?: {
        __typename: "ModelCommentConnection";
        nextToken?: string | null;
      } | null;
      owner: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    postCommentsId?: string | null;
    owner?: string | null;
  } | null;
};

export type OnUpdateCommentSubscriptionVariables = {
  owner?: string | null;
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?: {
    __typename: "Comment";
    id: string;
    content: string;
    post?: {
      __typename: "Post";
      id: string;
      title: string;
      content: string;
      image?: {
        __typename: "S3Object";
        bucket: string;
        region: string;
        key: string;
      } | null;
      upVotes?: number | null;
      downVotes?: number | null;
      tags?: Array<string | null> | null;
      comments?: {
        __typename: "ModelCommentConnection";
        nextToken?: string | null;
      } | null;
      owner: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    postCommentsId?: string | null;
    owner?: string | null;
  } | null;
};

export type OnDeleteCommentSubscriptionVariables = {
  owner?: string | null;
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?: {
    __typename: "Comment";
    id: string;
    content: string;
    post?: {
      __typename: "Post";
      id: string;
      title: string;
      content: string;
      image?: {
        __typename: "S3Object";
        bucket: string;
        region: string;
        key: string;
      } | null;
      upVotes?: number | null;
      downVotes?: number | null;
      tags?: Array<string | null> | null;
      comments?: {
        __typename: "ModelCommentConnection";
        nextToken?: string | null;
      } | null;
      owner: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
    postCommentsId?: string | null;
    owner?: string | null;
  } | null;
};
