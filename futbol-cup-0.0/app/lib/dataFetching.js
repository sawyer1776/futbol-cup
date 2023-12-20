export const fetchGames = async () => {
  const res = await fetch("http://localhost:3001/response", {
    next: { revalidate: 15 },
  });
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const games = await res.json();

  return games;
};