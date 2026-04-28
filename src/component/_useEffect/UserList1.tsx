import { useEffect, useState } from "react";

interface User {
  id: string;
  name: string;
  email: string;
}

export default function UserList1() {
  const [user, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  async function load() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");

      if (!res.ok) {
        throw new Error("요청 실패");
      }

      const data: User[] = await res.json();
      setUsers(data);
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      }
    }
  }

  useEffect(() => {
    load();
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <ul>
      {user.map((user) => (
        <li key={user.id}>
          {user.name} ({user.email})
        </li>
      ))}
    </ul>
  );
}
