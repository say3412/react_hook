import { useRef } from "react";

export default function UseRefTest() {
  const inputRef = useRef<HTMLInputElement>(null);
  const clickCountRef = useRef<number>(0);
  const handleClick = () => {
    inputRef.current?.focus();
    clickCountRef.current += 1;
    console.log(`클릭 횟수: ${clickCountRef.current}`);
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="enter here" />
      <button onClick={handleClick}>포커스 및 카운트 증가</button>
    </div>
  );
}
