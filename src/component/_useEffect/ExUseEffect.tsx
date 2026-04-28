import { useEffect, useState } from "react";

export default function ExUseEffect() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    document.title = `${count}번 클릭 :)`;
  }, [count]);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <p>{count}번 클릭 했어요.</p>
      <button onClick={handleClick}>클릭</button>
    </div>
  );
}
