/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($owner: String) {
    onCreatePost(owner: $owner) {
      id
      title
      content
      image {
        bucket
        region
        key
      }
      upVotes
      downVotes
      tags
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          postCommentsId
          owner
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($owner: String) {
    onUpdatePost(owner: $owner) {
      id
      title
      content
      image {
        bucket
        region
        key
      }
      upVotes
      downVotes
      tags
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          postCommentsId
          owner
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($owner: String) {
    onDeletePost(owner: $owner) {
      id
      title
      content
      image {
        bucket
        region
        key
      }
      upVotes
      downVotes
      tags
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          postCommentsId
          owner
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($owner: String) {
    onCreateComment(owner: $owner) {
      id
      content
      post {
        id
        title
        content
        image {
          bucket
          region
          key
        }
        upVotes
        downVotes
        tags
        comments {
          nextToken
        }
        owner
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      postCommentsId
      owner
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($owner: String) {
    onUpdateComment(owner: $owner) {
      id
      content
      post {
        id
        title
        content
        image {
          bucket
          region
          key
        }
        upVotes
        downVotes
        tags
        comments {
          nextToken
        }
        owner
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      postCommentsId
      owner
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($owner: String) {
    onDeleteComment(owner: $owner) {
      id
      content
      post {
        id
        title
        content
        image {
          bucket
          region
          key
        }
        upVotes
        downVotes
        tags
        comments {
          nextToken
        }
        owner
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      postCommentsId
      owner
    }
  }
`;
