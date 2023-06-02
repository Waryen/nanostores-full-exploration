import { useStore } from "@nanostores/react";
import { createFetcherStore } from "../stores";

export type Post = {
  id: number;
  postId: number;
  title: string;
  body: string;
};

const fetchPosts = createFetcherStore<Post[]>([
  "https://jsonplaceholder.typicode.com/posts",
]);

export const useGetPosts = () => {
  return useStore(fetchPosts);
};
