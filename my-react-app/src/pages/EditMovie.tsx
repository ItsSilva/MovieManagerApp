import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { updateMovie } from "../redux/slices/GetMoviesSlice";

const EditMovie = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (title.trim() && director.trim() && year.trim() && id) {
      const editMovie = {
        id: id,
        title: title.trim(),
        director: director.trim(),
        year: year.trim(),
      }
      dispatch(updateMovie(editMovie));
      navigate("/");
    }
  }

  return (
    <div>
      <h1>Edit Movie</h1>
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
        <button type="submit">Edit Movie</button>
      </form>
    </div>
  );
};

export default EditMovie;
