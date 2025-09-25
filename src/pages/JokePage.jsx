import JokeService from "../services/JokeService";
import { useState, useEffect } from "react";

export default function JokePage() {
  const [setup, setSetup] = useState(null);
  const [delivery, setDelivery] = useState(null);

  function getJoke() {
    JokeService.getJoke()
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
  }, []);

  return (
    <>
      <div className="wallpaper-joke">
        <h1>This is the Joke Page!</h1>

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
