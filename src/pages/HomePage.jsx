import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [category, setCategory] = useState("Any");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/joke?category=${category}`);
  }

  return (
    <div className="wallpaper-home">
      <h1>Welcome to the Joke Machine!</h1>
      <img src="/smiles.jpg" alt="smiley faces" className="header-image" />
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Please select a category:</legend>

          {["Any", "Programming", "Pun", "Halloween", "Christmas"].map(
            (cat) => (
              <label key={cat}>
                <input
                  type="radio"
                  name="category"
                  value={cat}
                  checked={category === cat}
                  onChange={(e) => setCategory(e.target.value)}
                />
                {cat}
              </label>
            )
          )}
        </fieldset>

        <button type="submit">Generate Joke</button>
      </form>

      <p className="note">
        Note from JokeAPI: JokeAPI will try its best to serve only jokes that
        are considered safe for everyone by defaulting to safe mode. This filter
        generally works but that doesn't mean human error is out of the
        question.
      </p>
    </div>
  );
}
