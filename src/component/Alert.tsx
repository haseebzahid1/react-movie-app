import React, { ReactNode } from "react";
interface props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: props) => {
  return (
    <div className="alert alert-primary alert-dimissible">
      {children}
      <button
        type="button"
        className="btn-close"
        onClick={onClose}
        data-bs-dismiss="alert"
      ></button>
    </div>
  );
};

export default Alert;
