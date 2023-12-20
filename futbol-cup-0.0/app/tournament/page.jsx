import Link from "next/link";

export default function Tournaments() {
  return (
    <div>
      <h1>Tournaments</h1>
      <ul>
        <li>
          <Link href={"/tournament/worldcup"}>World Cup </Link>{" "}
        </li>
        <li>
          <Link href={"/tournament/goldcup"}>Gold Cup </Link>{" "}
        </li>
      </ul>
    </div>
  );
}
//This should be the default boilerplate for a page in Next.js
