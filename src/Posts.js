import { useState, useEffect } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    requestPosts();
  });

  async function requestPosts() {
    let res = await fetch(
      "http://jsonplaceholder.typicode.com/posts/?_limit=10"
    );

    res = await res.json();

    setPosts(res);
    setLoading(false);
  }

  return (
    <div>
      {requestPosts}
      <div>
        {posts.map((post) => {
          return (
            <div className="post">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          );
        })}
        {/* loader */}
        <div
          className="loader"
          id={loading ? "display-block" : "display-none"}
        ></div>
      </div>
    </div>
  );
};

export default Posts;
