import { useGetPosts } from "../endpoints";

export const Posts = () => {
  const { loading, data } = useGetPosts();

  if (loading) {
    return (
      <div>
        <h1>Posts page</h1>
        <p>Loading...</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div>
        <h1>Posts page</h1>
        <p>There are no posts</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Posts page</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
