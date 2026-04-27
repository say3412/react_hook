import { useState } from "react";

interface User {
    id: number;
    name: string;
    email: string;
}

export default function UserList3() {
    const [users, setUser] = useState<User[]>([]);
    const [error, setError] = useState(null);

    async function load() {
        try {
          const res = await fetch('https://jsonplaceholder.typicode.com/users');
          if (!res.ok) {
            throw new Error('응답 실패');
          }

          const data: User[] = await res.json();
          setUser(data);


        } catch(e) {

        }
    }
}


