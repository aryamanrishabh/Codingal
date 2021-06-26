import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Results } from "./Results";

const SearchPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    requestPosts();
  }, []);

  async function requestPosts() {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");

    res = await res.json();

    setPosts(res);
  }

  return (
    <div>
      {/* <Navbar /> */}
      <Results posts={posts} />
    </div>
  );
};

export default SearchPosts;
