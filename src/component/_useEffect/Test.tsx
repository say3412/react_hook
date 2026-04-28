import { useEffect, useState } from "react";

export default function Test() {
  const [time, setTime] = useState<number>(0);
  useEffect(() => {
    console.log("timer start!");
    const id = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);

    return () => {
      console.log("timer cleanup!");
      clearInterval(id);
    };
  }, [time]);

  return <h1>{time} 초</h1>;
}
