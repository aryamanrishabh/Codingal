import { useEffect, useState } from "react";
import Modal from "./Modal";

const Dashboard = () => {
  const [show, setShow] = useState(false);

  //   const buttonHandler = () => {
  //     setShow((current) => !current);
  //   };

  function showModal() {
    setShow(true);
  }

  function hideModal() {
    setShow(false);
  }

  useEffect(() => {
    // console.log(show);
  }, [show]);

  return (
    <div>
      <Modal hideModal={hideModal} show={show} />
      <button type="button" onClick={showModal}>
        Show
      </button>
    </div>
  );
};
