import { useEffect, useState } from "react";

export function App() {
  const [fact, setFact] = useState("Test");

  useEffect(() => {
    //Fact
    fetch("https://catfact.ninja/fact")
      .then((response) => response.json())
      .then((data) => setFact(data.fact));
  }, []);

  return (
    <>
      <h1>App de gatitos</h1>
      <p>Hecho: {fact}</p>
      <p>Primera palabra: {fact.split(" ")[0]}</p>
    </>
  );
}
