import { useStore } from "@nanostores/react";
import { createFetcherStore } from "../stores";
import { atom } from "nanostores";

export type Post = {
  id: number;
  postId: number;
  title: string;
  body: string;
};

const getPosts = createFetcherStore<Post[]>([
  "https://jsonplaceholder.typicode.com/posts",
]);

export const useGetPosts = () => {
  return useStore(getPosts);
};

const $postId = atom("");
const getPost = createFetcherStore<Post>([
  "https://jsonplaceholder.typicode.com/posts/",
  $postId,
]);

export const useGetPost = (postId: number) => {
  $postId.set(postId.toString());
  return useStore(getPost);
};
