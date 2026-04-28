import { useState, useMemo } from "react";

export default function UseMemoTest2() {
  const [query, setQuery] = useState("");
  const [count, setCount] = useState(0);

  const list = ["apple", "app", "appl", "apples"];
  //   const filtered = list.filter((item) => item.includes(query)); // 매 렌더마다 실행됨, count 증가해도 filter 다시 실행됨, 아래처럼 함수로 실행 시 직관적으로 확인 가능
  const filtera = () => {
    console.log('count일 때도 실행되는지 확인!')
    return list.filter((item) => item.includes(query));
  }
  const filtered = useMemo(() => { // 다른 영역 변경되어 render 시 기존 값 유지 
    console.log('filter exec!');
    return list.filter((item) => item.includes(query));
  }, [query]);

  return (
    <>
      <h2>Search</h2>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="please enter"
      />
      <button onClick={() => setCount((prev) => prev + 1)}>
        increase count {count}
      </button>
      <ul>
        {filtered.map((item) => ( //filtera()
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
