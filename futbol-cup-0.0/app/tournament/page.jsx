import Link from "next/link";

export default function Tournaments() {
  return (
    <div>
      <h1 className="text-xl font-bold text-center w-full">Tournaments</h1>
      <ul className="text-center mt-5 flex flex-col gap-3">
        <li>
          <Link href={"/tournament/worldcup"}>World Cup </Link>
        </li>
        <li>
          <Link href={"/tournament/goldcup"}>Gold Cup </Link>
        </li>
      </ul>
    </div>
  );
}
//This should be the default boilerplate for a page in Next.js
