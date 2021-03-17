import React from "react";

// Drill PropBING
function DeleteBtn(props) {
  return (
    <span {...props} role="button" tabIndex="0">
      ✗
    </span>
  );
}

export default DeleteBtn;