import JokeService from "../services/JokeService";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function JokePage() {
  const [setup, setSetup] = useState(null);
  const [delivery, setDelivery] = useState(null);

  const location = useLocation();
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

        <h2>{setup || "loading joke..."}</h2>

        <h2>
          {delivery && (
            <p>
              <strong>{delivery}</strong>
            </p>
          )}
        </h2>
      </div>
    </>
  );
}
