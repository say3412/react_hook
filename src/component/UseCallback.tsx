import { useCallback, useState } from "react"; // useCallback는 함수

export default function ParentComponent() {
  const [count, setCount] = useState<number>(0);

  const handleClick = useCallback(() => {
    console.log("버튼 클릭");
  }, []);

  return (
    <div>
      <button onClick={handleClick}>클릭</button>
      <button onClick={() => setCount(count + 1)}>카운트 증가 {count}</button>
    </div>
  );
}
