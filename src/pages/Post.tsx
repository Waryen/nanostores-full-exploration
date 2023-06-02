import { useGetPost } from "../endpoints";

type Props = {
  postId: number;
};

export const Post = ({ postId }: Props) => {
  const { loading, data } = useGetPost(postId);

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div>
        <p>Couldn't get this post</p>
      </div>
    );
  }

  return (
    <div>
      <h3>{data.title}</h3>
      <p>{data.body}</p>
    </div>
  );
};
