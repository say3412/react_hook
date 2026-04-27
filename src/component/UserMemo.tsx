import { useMemo } from "react";

interface Props {
  num: number;
}

export default function ExUseMemo({ num }: Props) {
  const expensiveCalc = (n: number)=> {
  console.log("비싼 계산 실행 중 ...");
  return n * 2;
}
  const memorizedValue = useMemo(() => expensiveCalc(num), [num]);
  return <div>결과: {memorizedValue}</div>
}
