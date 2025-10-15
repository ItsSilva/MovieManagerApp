import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addMovie } from "../redux/slices/GetMoviesSlice";

const AddMovies = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (title.trim() && director.trim() && year.trim()) {
      const newMovie = {
        id: Date.now().toString(),
        title: title.trim(),
        director: director.trim(),
        year: year.trim(),
      }
      dispatch(addMovie(newMovie));
      setTitle("");
      setDirector("");
      setYear("");
      navigate("/");
    }
  }

  return (
    <div>
      <h1>Add Movie</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          />
          <label>Director:</label>
          <input
          type="text"
          value={director}
          onChange={(e) => setDirector(e.target.value)}
          required
          />
          <label>Year:</label>
          <input 
          type="text" 
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
          />
        </div>
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default AddMovies;
