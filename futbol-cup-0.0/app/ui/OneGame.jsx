import Image from "next/image";
import Slider from "./Slider";

// console.log("date is ", new Date(1692453600 * 1000).toLocaleDateString());

// const game = {
//   fixture: {
//     id: 1062790,
//     referee: null,
//     timezone: "UTC",
//     date: "2023-08-19T14:00:00+00:00",
//     timestamp: 1692453600,
//     periods: {
//       first: 1692453600,
//       second: 1692457200,
//     },
//     venue: {
//       id: 20345,
//       name: "Runcorn Linnets' APEC Taxi's Stadium",
//       city: "Runcorn, Cheshire",
//     },
//     status: {
//       long: "Match Finished",
//       short: "1H",
//       elapsed: 24,
//     },
//   },
//   league: {
//     id: 45,
//     name: "FA Cup",
//     country: "England",
//     logo: "https://media-4.api-sports.io/football/leagues/45.png",
//     flag: "https://media-4.api-sports.io/flags/gb.svg",
//     season: 2023,
//     round: "Preliminary Round",
//   },
//   teams: {
//     home: {
//       id: 7666,
//       name: "Runcorn Linnets",
//       logo: "https://media-4.api-sports.io/football/teams/7666.png",
//       winner: true,
//     },
//     away: {
//       id: 7749,
//       name: "Stalybridge Celtic",
//       logo: "https://media-4.api-sports.io/football/teams/7749.png",
//       winner: false,
//     },
//   },
//   goals: {
//     home: 3,
//     away: 2,
//   },
//   score: {
//     halftime: {
//       home: null,
//       away: null,
//     },
//     fulltime: {
//       home: 3,
//       away: 2,
//     },
//     extratime: {
//       home: null,
//       away: null,
//     },
//     penalty: {
//       home: null,
//       away: null,
//     },
//   },
// };

export default function OneGame({ game, amount }) {
  return (
    <li>
      <div className="flex gap-2 bg-alt-800 w-96 justify-between items-center p-1 rounded border border-alt-600 ">
        <div className="flex gap-2 items-center justify-center ">
          <p className="text-right text-sm w-24 ">
            {`${game.teams.home.name.slice(0, 11)}${
              game.teams.home.name.length > 8 ? "..." : ""
            }`}
          </p>
          <Image
            alt="team logo"
            className=""
            src={game.teams.home.logo}
            width="32"
            height="32"
          />
          <p className="text-2xl font-bold">{game.goals.home}</p>
        </div>
        <p
          className={`text-sm text-center font-semibold ${
            game.fixture.status.short !== "FT" &&
            game.fixture.status.short !== "NS"
              ? "text-red-600"
              : ""
          }`}
        >
          {game.fixture.status.short === "1H" ||
          game.fixture.status.short === "2H"
            ? `${game.fixture.status.elapsed}'`
            : game.fixture.status.short}
        </p>
        <div className="flex gap-2 items-center justify-center ">
          <p className="text-2xl font-bold">{game.goals.away}</p>
          <Image
            alt="team logo"
            className=""
            src={game.teams.away.logo}
            width="32"
            height="32"
          />
          <p
            className="
           text-sm w-24 "
          >
            {`${game.teams.away.name.slice(0, 11)}${
              game.teams.away.name.length > 8 ? "..." : ""
            }`}
          </p>
        </div>
      </div>
      <Slider amount={amount} type={"POS"} />
    </li>
  );
}
