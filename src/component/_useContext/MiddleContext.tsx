import MainContext from "./MainContext";

export default function MiddleContext() {
  return (
    <div style={{ backgroundColor: "lightyellow", padding: "20px" }}>
      <h1>
        This is middle
      </h1>
      <MainContext />
    </div>
  );
}
