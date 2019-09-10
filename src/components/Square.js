import React from "react";

export default function Square(props) {
  const [state, setState] = React.useState({ value: null });

  return (
    <button className="square" onClick={() => setState({ value: "X" })}>
      {state.value}
    </button>
  );
}
