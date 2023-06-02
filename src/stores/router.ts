import { useStore } from "@nanostores/react";
import { createRouter } from "@nanostores/router";

export enum Routes {
  HOME = "home",
  ABOUT = "about",
  POSTS = "posts",
  POST = "post",
}

const router = createRouter({
  home: "/",
  about: "/about",
  posts: "/posts",
  post: "/posts/:postId",
});

export const useRouter = () => {
  return useStore(router);
};
