import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useGetMoviesQuery } from "../services/ghibliFetch";
import type { RootState } from "../redux/store";
import { deleteMovie, getMovies } from "../redux/slices/GetMoviesSlice";
import { useEffect } from "react";

const Movies = () => {
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

  const handleUpdate = (id: string) => {
    navigate(`/update-movie/${id}`);
  };

  return (
    <section>
      <h1>Add Movie</h1>
      <button onClick={() => navigate("/add")}>Add Movie</button>

      {isLoading && movies.length === 0 ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error fetching movies</p>
      ) : movies.length > 0 ? (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <h2>{movie.title}</h2>
              <p>{movie.director}</p>
              <p>{movie.year}</p>
              <button onClick={() => handleDelete(movie.id)}>Delete</button>
              <button onClick={() => handleUpdate(movie.id)}>Update</button>
            </div>
          ))}
        </div>
      ) : (
        <p>No movies available</p>
      )}
    </section>
  );
};

export default Movies;
