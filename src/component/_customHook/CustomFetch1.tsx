import useFetch1 from "../../hook/useFetch1";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}
export default function CustomFetch1() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const { data, loading } = useFetch1<User[]>(url);

  if (loading) return <p>loading...</p>;

  return (<div>
    {data?.map((user) => <div key={user.id}>{user.name} ✉️{user.email}  📞{user.phone}</div>)}
  </div>);
}
