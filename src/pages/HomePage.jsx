export default function HomePage() {
  return (
    <div className="wallpaper-home">
      <h1>Welcome to the Joke Machine!</h1>

      <form>
        <fieldset>
          <legend>Please select a category:</legend>
          <label>
            <input type="radio" name="category" value="Any" defaultChecked />
            Any
          </label>

          <label>
            <input type="radio" name="category" value="Programming" />
            Programming
          </label>

          <label>
            <input type="radio" name="category" value="Pun" />
            Pun
          </label>

          <label>
            <input type="radio" name="category" value="Halloween" />
            Halloween
          </label>

          <label>
            <input type="radio" name="category" value="Christmas" />
            Christmas
          </label>
        </fieldset>
      </form>
    </div>
  );
}
