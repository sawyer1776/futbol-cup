import Link from "next/link";
import OneGroup from "../../ui/OneGroup";

export default function TournamentAtId({ params }) {
  return (
    <main>
      <h1>Tournament {params.tournamentId}</h1>
      <ul className="flex flex-col gap-6 ">
        <li>
          <Link href={`/tournament/${params.tournamentId}/A`}>
            <OneGroup groupName={"A"} />
          </Link>
        </li>
        <li>
          <Link href={`/tournament/${params.tournamentId}/B`}>
            <OneGroup groupName={"B"} />
          </Link>
        </li>
        <li>
          <button>
            <Link href={`/tournament`}>Back to tournaments </Link>{" "}
          </button>
        </li>
      </ul>
    </main>
  );
}
