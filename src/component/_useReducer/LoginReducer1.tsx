import { useReducer } from "react";

type State = {
  email: string;
  pass: string;
};

type Action =
  | { type: "CH_EMAIL"; value: string }
  | { type: "CH_PASS"; value: string }
  | { type: "RESET" };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "CH_EMAIL":
      return { ...state, email: action.value };
    case "CH_PASS":
      return { ...state, pass: action.value };
    case "RESET":
      return { email: "", pass: "" };
  }

  return state;
}

export default function LoginReducer1() {
  const [state, dispatch] = useReducer(reducer, { email: "", pass: "" });

  return (
    <div>
      <input
        type="text"
        placeholder="email"
        onChange={(e) => dispatch({ type: "CH_EMAIL", value: e.target.value })}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => {
          dispatch({ type: "CH_PASS", value: e.target.value });
        }}
      />
      <button onClick={(e) => dispatch({ type: "RESET" })}>reset</button>
      <p>{state.email}</p>
      <p>{state.pass}</p>
    </div>
  );
}
