import { useState } from "react";

function AddMovie(props) {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [IMDBRating, setIMDBRating] = useState(5);
  const [hasOscars, setHasOscars] = useState(true);

  const handleTitleInput = (e) => setTitle(e.target.value);
  const handleDirectorInput = (e) => setDirector(e.target.value);
  const handleRatingInput = (e) => setIMDBRating(e.target.value);
  const handleOscarsInput = (e) => setHasOscars(e.target.value);
  //(e.target.value): This is how the new value for the state is determined.
  // e.target refers to the element that triggered the event (in this case, the input field).
  // .value is a property of the input element that holds the current text entered by the user.

  const handleSubmit = (e) => {
    e.preventDefault(); // to cancel the default behavior of the form, the page reloads

    //we access the input data stored in the state (state variables title, director, etc.).
    const newMovie = { title, director, IMDBRating, hasOscars };
    
    console.log("Submitted: ", newMovie);
    props.addMovie(newMovie);  

    //Reset the state
    setTitle("");
    setDirector("");
    setIMDBRating(5);
    setHasOscars(true);
  };
  return (
    <div className="AddMovie">
      <h4>Add a Movie</h4>

      <form onSubmit={handleSubmit}>
        <label>Title: </label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleTitleInput}
        />

        <label>Director: </label>
        <input
          type="text"
          name="director"
          value={director}
          onChange={handleDirectorInput}
        />

        <label>IMDB Rating: </label>
        <input
          type="number"
          name="IMDBRating"
          value={IMDBRating}
          onChange={handleRatingInput}
        />

        <label>Won Oscars: </label>
        <input
          type="checkbox"
          name="hasOscars"
          value={hasOscars}
          onChange={handleOscarsInput}
        />

        <button type="submit">Add a Movie</button>
      </form>
    </div>
  );
}

export default AddMovie;
