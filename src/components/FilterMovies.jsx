import { useState } from "react";
import moviesDataJSON from "../movies-data.json";

function FilterMovies(props) {
  const [firstLetter, setFirstLetter] = useState("All");
  const [moviesData, setMoviesData] = useState(moviesDataJSON);


  const handleSelect = (e) => {
    setFirstLetter(e.target.value);
    console.log("selected", e.target.value);
    props.filterMovies(e.target.value); 
  };

  return (
    <div className="FilterMovies">
      <label>Show movies by first letter: </label>
      <select value={firstLetter} onChange={handleSelect}>
        <option value="All">All</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
      </select>
    </div>
  );
}

export default FilterMovies;
