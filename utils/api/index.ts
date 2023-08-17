export const fetchAsteroids = async (): Promise<AsteroidsResponce> => {
  const API_KEY = 'Nqb30Qe76NXWQrFhxLL3Cp26LUFgtRj002AjHkaX';
  const url = `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${API_KEY}`;

  const headers = {
    'Content-Type': 'application/json'
  };

  const response = await fetch(url, {
    headers,
    method: 'GET'
  });

  const result: AsteroidsResponce = await response.json();

  return result;
};
