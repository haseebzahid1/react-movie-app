import React from "react";

interface props {
  Children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

const Button = ({ Children, onClick, color = "primary" }: props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {Children}
    </button>
  );
};

export default Button;
