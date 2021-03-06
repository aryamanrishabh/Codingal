import logo from "../images/logo.png";
import { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import Modal from "./Modal";

const Navbar = () => {
  // prep for Timer
  const [counter, setCounter] = useState(600);
  const [min, setMin] = useState();
  const [sec, setSec] = useState();

  //prep for Modal
  const [show, setShow] = useState(false);

  const [nav, setNav] = useState(false);

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

  useEffect(() => {
    const timer =
      counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    setMin(Math.floor(counter / 60));
    setSec(counter % 60);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div>
      <div id="navbar">
        <Link to="/">
          <img id="logo" src={logo} alt="logo" />
        </Link>
        <span id="heading">Trial Lesson [Grade 1-3]</span>

        <div className="topnav-right">
          <span className="f-right">{`${min}:${sec}`}</span>
          <Modal hideModal={hideModal} show={show} />
          <Link to="/posts">
            <button id="posts">Posts</button>
          </Link>
          <button className="f-right orange" type="button" onClick={showModal}>
            End class
          </button>
        </div>
      </div>
      <div id="topnav">
        <Link to="/">
          <img id="logo" src={logo} alt="logo" />
        </Link>
        <span id="heading">Codingal</span>
        <div className="dropdown">
          <button className="dropbtn">
            <i className="fas fa-bars"></i>
          </button>
          <div className="dropdown-content">
            <Link to="/posts">Posts</Link>
            <a href="#">End class</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
