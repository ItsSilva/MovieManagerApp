import { BrowserRouter as Router, Routes, Route } from "react-router";
import Movies from "./pages/Movies";
import EditMovie from "./pages/EditMovie";
import AddMovie from "./pages/AddMovie";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/edit-movie/:id" element={<EditMovie />} />
        <Route path="/add" element={<AddMovie />} />
      </Routes>
    </Router>
  );
};

export default App;