import JokeService from "../services/JokeService";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function JokePage() {
  const [setup, setSetup] = useState(null);
  const [delivery, setDelivery] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const category = params.get("category") || "Any";

  function getJoke() {
    JokeService.getJoke(category)
      .then((response) => {
        console.log(response.data);
        if (response.data.type === "single") {
          setSetup(response.data.joke);
          setDelivery("");
        } else if (response.data.type === "twopart") {
          setSetup(response.data.setup);
          setDelivery(response.data.delivery);
        }
      })
      .catch((error) => {
        console.log("Error fetching joke: ", error);
      });
  }

  useEffect(() => {
    getJoke();
  }, [category]);

  return (
    <>
      <div className="wallpaper-joke">
        <h1>Here's your joke:</h1>
        <img
          src="/smiley_face.jpg"
          alt="melting smiley face"
          className="header-image"
        />
        <h2>{setup || "loading joke..."}</h2>

        <h2>
          {delivery && (
            <p>
              <strong>{delivery}</strong>
            </p>
          )}
        </h2>
        <div className="joke-buttons">
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={getJoke}>Generate Another Joke</button>
        </div>
        <p className="note">
          Note from JokeAPI: JokeAPI will try its best to serve only jokes that
          are considered safe for everyone by defaulting to safe mode. This
          filter generally works but that doesn't mean human error is out of the
          question.
        </p>
      </div>
    </>
  );
}
