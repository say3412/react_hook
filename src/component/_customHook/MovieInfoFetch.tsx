import useFetch from "../../hook/useFetch";

interface Movie {
  id: number;
  title: string;
  poster: string;
}

export default function MovieInfoFetch() {
  const url =
    "https://raw.githubusercontent.com/wizard113/ML-Basic/main/movie.json";
  const { data, loading } = useFetch<{ movies: Movie[] }>(url);

  if (loading) return <p>loading...</p>;

  return (
    <div style={container}>
      {data?.movies.map((movie: Movie) => (
        <div style={card} key={movie.id}>
          <img style={image} src={movie.poster} alt={movie.title} />
          <div style={title}>{movie.title}</div>
        </div>
      ))}
    </div>
  );
}

const container: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
};

const card: React.CSSProperties = {
  width: "200px",
  height: "400px",
  border: "1px solid #ddd",
  borderRadius: "10px",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
};

const image: React.CSSProperties = {
  width: "100%",
  height: "90%",
  objectFit: "cover", // 원본 비율 유지
};

const title: React.CSSProperties = {
  height: "10%",
  display: "flex",
  alignItems: "center", // 위, 중간, 아래
  justifyContent: "center", // 왼쪽, 가운데, 오른쪽
  fontSize: "1.2rem",
  fontWeight: "bold",
  padding: "5px",
};
