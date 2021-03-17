import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 555, clear: "both", paddingTop: 115, textAlign: "center" }}
    >
      {children}
    </div>
  );
}
export default Jumbotron;