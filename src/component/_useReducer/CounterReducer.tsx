import { useReducer } from "react";

type Action = "INC" | "DEC";

function countReducer(current: number, action: Action): number {
  if (action === "INC") {
    return current + 1;
  } else if (action === "DEC") {
    return current - 1;
  }
  return current;
}

export default function CounterR() {
  const [count, dispatch] = useReducer(countReducer, 0);

  function increase(): void {
    dispatch("INC");
  }

  function decrease(): void {
    dispatch("DEC");
  }

  return (
    <div>
      <h2>{count}</h2>
      <input type="button" value="+" onClick={increase} />
      <input type="button" value="-" onClick={decrease} />
    </div>
  );
}
