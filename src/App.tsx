import CCounter from "./component/CCounter";
// import "./App.css";
import ExUseEffect from "./component/ExUseEffect";
import UserList from "./component/UserList";
import UserList1 from "./component/UserList1";
import UserList2 from "./component/UserList2";
import UserList3 from "./component/UserList3"
import Counter from "./component/Counter";
import Test from "./component/Test";
import MovieInfo from "./component/MovieInfo";
import ExUseMemo from "./component/UserMemo";
import UseMemoTest from "./component/UseMemoTest";
import ParentComponent from "./component/UseCallback";
import UseMemoTest1 from "./UseMemoTest1";
import UseMemoTest2 from "./UseMemoTest2";

function App() {
  return (
    <>
      <ParentComponent />
      {/* <UseMemoTest1 /> */}
      {/* <UseMemoTest2 /> */}
      {/* <ExUseMemo num={2}/> */}
      {/* <MovieInfo /> */}
      {/* <UserList2 /> */}

      {/* <Test />
      <Test />
      <Test /> 
      <Counter />
      <CCounter count={0} /> 
      <ExUseEffect />
      <UserList1 />*/}
    </>
  );
}

export default App;
