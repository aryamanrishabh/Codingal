import Post from "./Post";

const Results = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => {
        return <Post title={post.title} body={post.body} />;
      })}
    </div>
  );
};

export default Results;
