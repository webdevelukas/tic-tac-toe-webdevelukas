import React from "react";

export default function Square(props) {
  return (
    <button className="square" onClick={() => alert(props.value)}>
      {props.value}
    </button>
  );
}
