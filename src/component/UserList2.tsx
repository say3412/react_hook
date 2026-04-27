import { useEffect, useState } from "react";

interface User {
  id: string;
  name: string;
  email: string;
}

export default function UserList2() {
  const [users, setUser] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  async function load() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");

      if (!res.ok) {
        throw new Error("요청 실패");
      }

      const data: User[] = await res.json();
      setUser(data);
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      }
    }
  }

  useEffect(() => {
    load();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <ul>
      {users.map((user: User) => (
        <li key={user.id}>
          {user.name} ({user.email})
        </li>
      ))}
    </ul>
  );
}
