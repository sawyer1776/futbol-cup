export const fetchGames = async () => {
  const res = await fetch("http://localhost:3001/response", {
    next: { revalidate: 12 },
  });
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const games = await res.json();
  console.log("res is ", games.length);

  return games;
};