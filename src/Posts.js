import { useState, useEffect } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    requestPosts();
  }, []);

  async function requestPosts() {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");

    res = await res.json();

    setPosts(res);
  }

  //   return requestPosts();

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
      </div>
    </div>
  );
};

export default Posts;
