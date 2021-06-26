import { useEffect, useState } from "react";

const Modal = ({ hideModal, show }) => {
  const modalClass = show ? "modal display-block" : "modal display-none";

  const [review, setReview] = useState(false);
  const [text, setText] = useState(false);

  function showReview() {
    setReview(true);
  }
  function hideReview() {
    setReview(false);
  }

  function showText() {
    setText(true);
  }
  function hideText() {
    setText(false);
  }

  useEffect(() => {}, [review]);
  useEffect(() => {}, [text]);

  return (
    <div className={modalClass}>
      <div className="modal-main">
        <button id="cross" onClick={hideModal}>
          <i class="fas fa-times"></i>
        </button>
        <form
          id="form-main"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h2>Select a reason to end class</h2>
          <div className="div-input">
            <input
              type="radio"
              id="comp"
              value="HTML"
              name="review"
              onClick={hideReview}
            />
            <label htmlFor="comp">Class completed</label>
          </div>
          <input
            type="radio"
            id="abort"
            value="HTML"
            name="review"
            onClick={showReview}
          />
          <label htmlFor="abort">Class interrupted/aborted</label>
          <form
            id="sub-form"
            className={review ? "display-block" : "display-none"}
          >
            <div>
              <input
                type="radio"
                id="noshow"
                name="review"
                value="HTML"
                onClick={hideText}
              />
              <label htmlFor="noshow">
                Student didn't show up for the class
              </label>
            </div>
            <div className="pad">
              <input
                type="radio"
                id="int"
                name="review"
                value="HTML"
                onClick={hideText}
              />
              <label htmlFor="int">Student didn't show any interest</label>
            </div>
            <div className="pad">
              <input
                type="radio"
                id="dc"
                name="review"
                value="HTML"
                onClick={hideText}
              />
              <label htmlFor="dc">Student got disconnected</label>
            </div>
            <div className="pad">
              <input
                type="radio"
                id="idc"
                name="review"
                value="HTML"
                onClick={hideText}
              />
              <label htmlFor="idc">I got disconnected</label>
            </div>
            <div className="pad">
              <input
                type="radio"
                id="other"
                name="review"
                value="HTML"
                onClick={showText}
              />
              <label htmlFor="other">Other reason</label>
              <textarea
                id="other"
                name="review"
                rows="4"
                cols="50"
                placeholder="Type here"
                className={text ? "display-block" : "display-none"}
              ></textarea>
            </div>
          </form>
        </form>
        <button className="orange" type="button">
          End Class
        </button>
        <button id="cancel" type="button" onClick={hideModal}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Modal;
