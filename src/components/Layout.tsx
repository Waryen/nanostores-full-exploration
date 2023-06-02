import { useMemo } from "react";
import { Routes, useRouter } from "../stores";
import { About, Home, NotFound, Post, Posts } from "../pages";

export const Layout = () => {
  const page = useRouter();

  const activePage = useMemo(() => {
    if (!page) {
      return <NotFound />;
    } else if (page.route === Routes.HOME) {
      return <Home />;
    } else if (page.route === Routes.ABOUT) {
      return <About />;
    } else if (page.route === Routes.POSTS) {
      return <Posts />;
    } else if (page.route === Routes.POST) {
      return <Post postId={parseInt(page.params.postId)} />;
    } else {
      throw new Error("Invalid page route");
    }
  }, [page]);

  return (
    <div>
      <header>
        <p>Header content</p>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/posts">Posts</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>{activePage}</main>
      <footer>
        <p>Footer content</p>
      </footer>
    </div>
  );
};
