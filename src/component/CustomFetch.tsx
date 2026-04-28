import useFetch from "../hook/useFetch";

type Movie = {
  id: number;
  title: string;
  poster: string;
};

export default function CustomFetch() {
  const url =
    "https://raw.githubusercontent.com/wizard113/ML-Basic/main/movie.json";
  const { data, loading } = useFetch<{ movies: Movie[] }>(url);

  if (loading) return <p>loading...</p>;

  return (
    <div>
      {data?.movies.map((m) => (
        <div key={m.title}>
          <img src={m.poster} alt={m.title}/>
          <h2 key={m.id}>{m.title}</h2>
        </div>
      ))}
    </div>
  );
}
