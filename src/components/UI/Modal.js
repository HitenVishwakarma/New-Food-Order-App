import "./Modal.css";
import { Fragment, useContext } from "react";
import ReactDOM from "react-dom";
import { AppContext } from "../store/AppContext";

const Backdrop = (props) => {
  const { setShowAndHideCart } = useContext(AppContext);
  return (
    <div className="backdrop" onClick={() => setShowAndHideCart(false)}></div>
  );
};

const Overlay = (props) => {
  return <div className="modal">{props.children}</div>;
};

const portalElement = document.getElementById("overlay");

export const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <Overlay>{props.children}</Overlay>,
        portalElement
      )}
    </Fragment>
  );
};
