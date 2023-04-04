import React from "react";

function Box(props) {
  return (
    <div className="box" onClick={() => props.showChar(props.id)}>
      <p>{props.char}</p>
    </div>
  );
}

export default Box;
