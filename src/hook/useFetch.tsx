import { useEffect, useState } from "react";

export default function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const load = async () => {
      const res = await fetch(url);
      
      if (!res.ok) console.log("요청 실패");
      const json = await res.json();
      setData(json);
      setLoading(false);
    };

    setInterval(() => {load()}, 1000);
  }, [url]);

  return { data, loading };
}