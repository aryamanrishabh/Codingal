import logo from "../images/logo.png";
import { useState, useEffect } from "react";
import Modal from "./Modal";
import Results from "./Results";

const Navbar = () => {
  // prep for Timer
  const [counter, setCounter] = useState(600);
  const [min, setMin] = useState();
  const [sec, setSec] = useState();

  //prep for Modal
  const [show, setShow] = useState(false);

  const [nav, setNav] = useState(false);

  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = useState(true);

  function toggleNav() {
    setNav((current) => !current);
  }

  // handling modal
  function showModal() {
    setShow(true);
  }
  function hideModal() {
    setShow(false);
  }

  useEffect(() => {}, [show]);

  useEffect(() => {}, [nav]);

  useEffect(() => {
    const timer =
      counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    setMin(Math.floor(counter / 60));
    setSec(counter % 60);
    return () => clearInterval(timer);
  }, [counter]);

  async function requestPosts() {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");

    res = await res.json();

    setPosts(res);
    setLoading(false);
  }

  const loader = loading ? "display-block" : "display-none";

  return (
    <div>
      <div id="navbar">
        <img id="logo" src={logo} alt="logo" />
        <span id="heading">Trial Lesson [Grade 1-3]</span>

        <div className="topnav-right">
          <span className="f-right">{`${min}:${sec}`}</span>
          <Modal hideModal={hideModal} show={show} />
          <button
            id="posts"
            onClick={(e) => {
              e.preventDefault();
              requestPosts();
            }}
          >
            Posts
          </button>
          <button className="f-right orange" type="button" onClick={showModal}>
            End class
          </button>
        </div>
      </div>
      <div id="topnav">
        <img id="logo" src={logo} alt="logo" />
        <span id="heading">Codingal</span>
        <button id="menu" className="icon" onClick={toggleNav}>
          <i className="fas fa-bars"></i>
        </button>
        <div className={nav ? "display-block" : "display-none"}>
          <a href="#" onClick={showModal}>
            End Class
          </a>
          //<a href="#">Link 2</a>
          //<a href="#">Link 3</a>
        </div>
      </div>
      <div
        className="loader"
        id={loading ? "display-block" : "display-none"}
      ></div>
      <Results posts={posts} />
    </div>
  );
};

export default Navbar;
