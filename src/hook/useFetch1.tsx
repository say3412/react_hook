import { useEffect, useState } from "react";

export default function useFetch1<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("응답 실패");
        }

        const jdata = await res.json();
        setData(jdata);
        setLoading(false);
      } catch (e) {
        if (e instanceof Error) {
          console.log(e.message);
        } else {
          console.log("알 수 없는 오류");
        }
      }
    };
    setInterval(() => {
      load();
    }, 3000);
  }, []);

  return {data: data, loading: loading}
}
