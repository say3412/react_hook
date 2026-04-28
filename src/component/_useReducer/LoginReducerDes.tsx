import { useReducer } from "react";

type State = {
  email: string;
  pass: string;
};

type Action =
  | { type: "CH_EMAIL"; value: string }
  | { type: "CH_PASS"; value: string }
  | { type: "RESET" };

// state와 action을 분리하여 선언
// 상태관리 함수에서 action에 따라 state을 변경
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

// 컴포넌트에서는 uesReducer를 이용하여 dispatch로 상태관리 함수와 상태를 초기화 
export default function LoginReducerDes() {
  const [state, dispatch] = useReducer(reducer, { email: "", pass: "" }); // 상태관리 함수(reducer)와 상태(state)를 전달 받는다.

  return (
    <div>
      <input type="text" onChange={(e) => {dispatch({type: 'CH_EMAIL', value: e.target.value})}}/>
      <input type="password" onChange={(e) => {dispatch({type: 'CH_PASS', value: e.target.value})}}/>
      <button onClick={(e) => {dispatch({type: 'RESET'})}}>reset</button>
      <p>{state.email}</p>
      <p>{state.pass}</p>
    </div>
  );
}
