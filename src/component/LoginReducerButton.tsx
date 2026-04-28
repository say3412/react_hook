import { useReducer, useState } from "react";

type State = { email: string; password: string };
type Action =
  | { type: "CHANGE_EMAIL"; value: string }
  | { type: "CHANGE_PASSWORD"; value: string }
  | { type: "RESET" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "CHANGE_EMAIL":
      return { ...state, email: action.value };
    case "CHANGE_PASSWORD":
      return { ...state, password: action.value };
    case "RESET":
      return { email: "", password: "" };
    default:
      return state;
  }
}

export default function LoginReducerButton() {
  const [state, dispatch] = useReducer(reducer, { email: "", password: "" });
  const [emailInput, setEmailInput] = useState("");
  const [passwdInput, setPasswdInput] = useState("");

  const clearInput = () => {
    setEmailInput("");
    setPasswdInput("");
  };

  return (
    <div style={container}>
      <input
        placeholder="email"
        type="text"
        value={emailInput}
        onChange={(e) => setEmailInput(e.target.value)}
      />
      <button
        style={button}
        title="change email"
        onClick={() => {
          dispatch({ type: "CHANGE_EMAIL", value: emailInput });
          clearInput();
        }}
      >
        ✉️
      </button>
      <input
        placeholder="password"
        type="password"
        value={passwdInput}
        onChange={(e) => {
          setPasswdInput(e.target.value);
        }}
      />
      <button
        style={button}
        title="change password"
        onClick={() => {
          dispatch({ type: "CHANGE_PASSWORD", value: passwdInput });
          clearInput();
        }}
      >
        🔐
      </button>
      <button
        style={button}
        onClick={() => {
          dispatch({ type: "RESET" });
          clearInput();
        }}
      >
        🔄
      </button>
      <p>{state.email}</p>
      <p>{state.password}</p>
    </div>
  );
}

const container: React.CSSProperties = {
  padding: "20px",
}
const button: React.CSSProperties = {
  backgroundColor: "pink",
  border: "5",
  borderColor: "white",
  borderRadius: "30%",
  margin: "5px",
};
