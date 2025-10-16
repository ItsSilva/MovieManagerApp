import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useGetMoviesQuery } from "../services/ghibliFetch";
import type { RootState } from "../redux/store";
import { useEffect } from "react";
import { deleteMovie, getMovies } from "../redux/slices/GetMoviesSlice";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, isLoading, error } = useGetMoviesQuery(10);
  console.log(data);
  const movies = useSelector((state: RootState) => state.movies.movies);

  useEffect(() => {
    if (data && movies.length === 0) {
      dispatch(getMovies(data));
    }
  }, [data, movies.length, dispatch]);

  const handleDelete = (id: string) => {
    dispatch(deleteMovie(id));
  };

  const handleEdit = (id: string) => {
    navigate(`/edit-movie/${id}`);
  };

  const handleAdd = () => {
    navigate("/add");
  };

  return (
    <section>
      <h1>Movies</h1>
      <button onClick={handleAdd}>Add Movie</button>

      {isLoading && movies.length === 0 ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error!</p>
      ) : movies.length > 0 ? (
        <section>
          {movies.map((movie) => (
            <div key={movie.id}>
              <h1>{movie.title}</h1>
              <p>{movie.director}</p>
              <p>{movie.year}</p>
              <button onClick={() => handleDelete(movie.id)}>Delete</button>
              <button onClick={() => handleEdit(movie.id)}>Delete</button>
            </div>
          ))}
        </section>
      ) : (
        <p>No movies available</p>
      )}
    </section>
  );
};
export default Home;
