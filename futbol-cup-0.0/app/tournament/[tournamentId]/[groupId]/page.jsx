import Link from "next/link";
import OneGroup from "../../../ui/OneGroup";
import OneGame from "../../../ui/OneGame";
import { fetchGames } from "../../../lib/dataFetching";

export default async function TournamentAtId({ params }) {
  const games = await fetchGames();
  return (
    <main>
      <h1>Group {params.groupId}</h1>
      <OneGroup groupName={params.groupId} />
      <ul className="mt-4 flex gap-2 flex-col justify-center items-center p-2 rounded-md bg-alt-950 border-2 border-alt-800">
        {games.map((game) => {
          if (game.league.id === 48) {
            return <OneGame key={game.fixture.id} game={game} amount={47} />;
          }
        })}
      </ul>
      <ul>
        <li>
          <Link href={`/tournament/${params.tournamentId}`}>
            Back To Tournament{" "}
          </Link>{" "}
        </li>
        <li>
          <Link href={`/tournament`}>See other tournaments</Link>{" "}
        </li>
      </ul>
    </main>
  );
}
