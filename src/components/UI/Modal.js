import "./Modal.css";
import { Fragment } from "react";
import ReactDOM from "react-dom";

const Backdrop = () => {
  return <div className="backdrop"></div>;
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
