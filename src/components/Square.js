import React from "react";
import "./Square.css";

function Square(props) {
  function handleSquareClick() {
    props.onSquareSelected(props.square.id);
  }
  return (
    <div className="square" onClick={handleSquareClick}>
      <p className="toggle-player-1">
        {props.square.value ? props.square.value : null}
      </p>
    </div>
  );
}

export default Square;
