import { useState, useMemo } from "react";

export default function UseMemoTest1() {
  const [query, setQuery] = useState("");
  const [count, setCount] = useState(0);

  const list = ["apple", "banana", "avocado", "olive", "orage"];

  // query로 들어오는 문자열과 매칭되는 list를 반환, 값 반환
  const filtered = useMemo(() => {
    console.log("filter exec.");
    return list.filter((value) => value.includes(query));
  }, [query]);

  return (
    <>
      <h2>Search</h2>
      <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="enter the object" />
      <br/>
      <button onClick={(event) => setCount((prev) => prev + 1)}>increase count {count}</button>
      <ul>
        {filtered.map(item => (
            <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
