import { useReducer } from "react";

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

export default function LoginReducer() {
    const [state, dispatch] = useReducer(reducer, {email: '', password: ''});

    return (
        <div>
            <input id="email" placeholder="email" type="text" value={state.email} onChange={(e) => {dispatch({type: 'CHANGE_EMAIL', value: e.target.value})}}/>
            <input id="password" placeholder="password" type="password" value={state.password} onChange={(e) => {dispatch({type: 'CHANGE_PASSWORD', value: e.target.value})}}/>
            <p>{state.email}</p>
            <p>{state.password}</p>
        </div>
    )
}

