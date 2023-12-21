export let games = []
export const fetchGames = async () => {
  const res = await fetch("http://localhost:3001/response", {
    next: { revalidate: 15 },
  });
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  //could i check to see if this is the same as the last one and if so not update?
  games = await res.json();

  return games;
};