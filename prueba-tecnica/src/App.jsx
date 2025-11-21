import { use, useEffect, useState } from "react";
import { getRandomFact } from "./services/facts";
import "./App.css";

//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?json=true`;
const CAT_PREFIX_IMAGE_URL = "https://cataas.com";

/*
    Custom hook

    Se pueden llamar a otros hooks dentro
*/
function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (!fact) return;
    const firstWord = fact.split(" ")[0];
    fetch(`https://cataas.com/cat/says/${firstWord}?json=true`)
      .then((response) => response.json())
      .then((data) => setImageUrl(data.url));
  }, [fact]);

  return { imageUrl };
}

export function App() {
  const [fact, setFact] = useState("");
  const { imageUrl } = useCatImage({ fact });

  /*useEffect(() => {
    //Fact
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((response) => response.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);

        const firstWord = fact.split(" ")[0];
        //const nFirstWords = fact.split(" ").slice(0, 3).join(" ");

        //Image
        fetch(`https://cataas.com/cat/says/${firstWord}?json=true`)
          .then((response) => response.json())
          .then((data) => setImageUrl(data.url));
      });
  }, []);*/

  //Alternativa: varios useEffect
  useEffect(() => {
    // getRandomFact().then(setFact);
    getRandomFact().then((newFact) => setFact(newFact));
  }, []);

  const handleClick = async () => {
    const newFact = await getRandomFact();
    setFact(newFact);
  };

  return (
    <main>
      <h1>App de gatitos</h1>
      <section id="seccion1">
        <button onClick={handleClick}>Nuevo hecho</button>
        {fact && <p>Hecho: {fact}</p>}
        {imageUrl && (
          <img
            src={imageUrl}
            alt={`Cat image saying the first word of '${fact}'`}
          />
        )}
      </section>
      <section id="seccion2">
        {fact && <p>Hecho: {fact}</p>}
        {imageUrl && (
          <img
            src={imageUrl}
            alt={`Cat image saying the first word of '${fact}'`}
          />
        )}
      </section>
    </main>
  );
}
