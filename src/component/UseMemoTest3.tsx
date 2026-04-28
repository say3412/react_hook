import { useMemo, useState } from "react";

export default function UseMemoTest3() {
  const [query, setQuery] = useState("");
  const [count, setCount] = useState(0);

  const list = ["apple", "app", "avocado", "pie"];
  const filtered = useMemo(() => {
    list.filter((item) => item.includes(query));
  }, [query]);

  return (
    <>
      <h1>Search</h1>
      <input
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        placeholder="enter the object"
      />
    </>
  );
}
