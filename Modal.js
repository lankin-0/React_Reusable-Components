import { useEffect } from "react";
import ReactDOM from "react-dom";

const Modal = ({ onClose, children, actionBar }) => {
  //FIXED SCROLL WHEN MODAL OPEN
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    //UN-FIXED WHEN MODAL CLOSE
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-stone-600 opacity-80"
      ></div>
      <div className="fixed inset-40 p-10 bg-stone-900">
        <div className="flex flex-col justify-between h-full">
          {children}
          <div className="flex justify-end">{actionBar}</div>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
};

export default Modal;
