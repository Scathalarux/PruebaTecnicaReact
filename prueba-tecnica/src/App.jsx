import { use, useEffect, useState } from "react";
import "./App.css";

const CAT_ENDPOINT_RANDOM_FACT = `https://catfact.ninja/fact`;
//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?json=true`;
const CAT_PREFIX_IMAGE_URL = "https://cataas.com";

export function App() {
  const [fact, setFact] = useState("");
  const [imageUrl, setImageUrl] = useState("");

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
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((response) => response.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);
      });
  }, []);
  
  useEffect(() => {
    if(!fact) return;
    const firstWord = fact.split(" ")[0];  
    fetch(`https://cataas.com/cat/says/${firstWord}?json=true`)
      .then((response) => response.json())
      .then((data) => setImageUrl(data.url));
  }, [fact]);

  return (
    <main>
      <h1>App de gatitos</h1>
      <section id="seccion1">
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
