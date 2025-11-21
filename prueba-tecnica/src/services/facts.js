const CAT_ENDPOINT_RANDOM_FACT = `https://catfact.ninja/fact`;

/*export const getRandomFact = () => {
  return fetch(CAT_ENDPOINT_RANDOM_FACT)
    .then((response) => response.json())
    .then((data) => {
      const { fact } = data;
      return fact;
    });
};*/
export const getRandomFact = async () => {
  const response = await fetch(CAT_ENDPOINT_RANDOM_FACT);
  const data = await response.json();
  const { fact } = data;
  return fact;
};
