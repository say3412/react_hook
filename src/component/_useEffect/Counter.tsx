import { useEffect, useState } from "react";

export default function Counter() {
    const [count, setCount] = useState<number>(0);
    
    useEffect(()=> {
        console.log('count changed: ', count);
    }, [count]); // 의존성 배열이 있는 값이 변경되어 rerender 되고 난후 앞의 선언된 함수 호출

    return (
        <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    );
}