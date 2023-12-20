import Image from "next/image";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

export default function OneGroup({ groupName }) {
  return (
    <section className=" bg-trans-300 rounded-md border-2 border-slate-400 overflow-hidden drop-shadow-lg ">
      <h3 className="border-b border-slate-600 text-center text-xl p-1 font-semibold w-full">
        Group {groupName}
      </h3>
      <div className="flex gap-2 w-full text-slate-400 m-2 pl-2 pr-2">
        <div className="w-8 "></div>
        <h4 className="w-28">Team</h4>
        <h4 className="w-8  mr-2">PTS</h4>
        <h4 className="w-8">GD</h4>
        <h4 className="w-8">G1</h4>
        <h4 className="w-8">G2</h4>
        <h4 className="w-8">G3</h4>
      </div>
      <ul>
        <Team
          team={{
            name: "Poland",
            img: "https://media-4.api-sports.io/flags/id.svg",
          }}
          points={6}
          gd={3}
          games={["w", "w"]}
          opponents={[
            "https://media-4.api-sports.io/flags/gb.svg",
            "https://media-4.api-sports.io/flags/fr.svg",
            "https://media-4.api-sports.io/flags/mx.svg",
          ]}
        />
        <Team
          team={{
            name: "France",
            img: "https://media-4.api-sports.io/flags/fr.svg",
          }}
          points={4}
          gd={1}
          games={["d", "w"]}
          opponents={[
            "https://media-4.api-sports.io/flags/id.svg",
            "https://media-4.api-sports.io/flags/mx.svg",
            "https://media-4.api-sports.io/flags/gb.svg",
          ]}
        />
        <Team
          team={{
            name: "Mexico",
            img: "https://media-4.api-sports.io/flags/mx.svg",
          }}
          points={1}
          gd={0}
          games={["d", "l"]}
          opponents={[
            "https://media-4.api-sports.io/flags/fr.svg",
            "https://media-4.api-sports.io/flags/gb.svg",
            "https://media-4.api-sports.io/flags/id.svg",
          ]}
        />
        <Team
          team={{
            name: "Great Britan",
            img: "https://media-4.api-sports.io/flags/gb.svg",
          }}
          points={0}
          gd={-4}
          games={["l", "l"]}
          opponents={[
            "https://media-4.api-sports.io/flags/mx.svg",
            "https://media-4.api-sports.io/flags/id.svg",
            "https://media-4.api-sports.io/flags/fr.svg",
          ]}
        />
      </ul>
    </section>
  );
}

const ResultIcon = ({ result }) => {
  return (
    <>
      {result === "d" ? (
        <RemoveCircleIcon className="w-4 h-4 absolute -bottom-1 -left-1 text-amber-600 bg-slate-50 rounded-xl " />
      ) : null}
      {result === "l" ? (
        <CancelIcon className="w-4 h-4 absolute -bottom-1 -left-1 text-red-700 bg-slate-50 rounded-xl " />
      ) : null}
      {result === "w" ? (
        <CheckCircleIcon className="w-4 h-4 absolute -bottom-1 -left-1 text-lime-700 bg-slate-50 rounded-xl " />
      ) : null}
    </>
  );
};

const Game = ({ result, img }) => {
  return (
    <div className="w-8 h-8 relative flex items-center">
      <Image
        alt="team logo"
        className="border border-slate-900"
        width="32"
        height="32"
        src={img}
      />
      <ResultIcon result={result ? result : null} />
    </div>
  );
};

const Team = ({ team, points, gd, opponents, games }) => {
  return (
    <li className="flex  rounded items-center w-96 gap-3 p-2 m-2 bg-slate-800 border text-slate-50 border-slate-700">
      <Image
        alt="team logo"
        className="border border-slate-900"
        src={team.img}
        width="32"
        height="32"
      />
      <h4 className="w-32 font-medium">{`${team.name.slice(0, 12)}${
        team.name.length > 12 ? "..." : ""
      }`}</h4>
      <h4 className="w-8  font-bold text-xl border-r border-slate-500">
        {points}
      </h4>
      <h4 className="w-8 text-xl ">{`${gd >= 0 ? "+" : ""}${gd}`}</h4>

      <Game result={games[0]} img={opponents[0]} />
      <Game result={games[1]} img={opponents[1]} />
      <Game result={games[2]} img={opponents[2]} />
    </li>
  );
};
