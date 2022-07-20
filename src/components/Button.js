import React from "react";

function Button({ onClick, children }) {
  return (
    <button className="p-4 transition ease-in-out rounded-full shadow-lg hover:opacity-70" onClick={onClick}>{children}</button>
  );
}

export default Button;