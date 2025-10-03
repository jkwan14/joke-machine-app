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
    </div>
  );
}
