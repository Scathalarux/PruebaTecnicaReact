import { useCatFact } from "./useCatFact";
import { useCatImage } from "./useCatImage";
import "./App.css";

//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?json=true`;
const CAT_PREFIX_IMAGE_URL = "https://cataas.com";

export function App() {
  const { fact, refreshFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });

  const handleClick = async () => {
    refreshFact();
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
