import Link from "next/link";
import OneGame from "../ui/OneGame";
import { fetchGames } from "../lib/dataFetching";
import ClientTest from "../ui/ClientTest";

export default async function page({ params }) {
  const games = await fetchGames();
  return (
    <main>
      <h1>{games.length} Current Matches</h1>
      <ClientTest />

      <ul className="mt-4 flex gap-2 flex-col justify-center items-center p-2 rounded-md bg-alt-950 border-2 border-alt-800 ">
        {games.map((game) => (
          <OneGame key={game.fixture.id} game={game} amount={47} />
        ))}
      </ul>
    </main>
  );
}
