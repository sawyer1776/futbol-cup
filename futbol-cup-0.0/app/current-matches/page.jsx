"use client";
import Link from "next/link";
import OneGame from "../ui/OneGame";
import { fetchGames } from "../lib/dataFetching";
import ClientTest from "../ui/ClientTest";
import { useState, useEffect } from "react";

export default function page({ params }) {
  // const games = await fetchGames();

  // const [games, setGames] = useState(0);
  // useEffect(() => {
  //   const eventSource = new EventSource("/api");
  //   console.log("connected", eventSource);

  //   eventSource.onmessage = (event) => {
  //     console.log("event", typeof event.data, JSON.parse(event.data));
  //     setGames(event.data);
  //   };

  //   return () => {
  //     eventSource.close();
  //   };
  // }, []);
  return (
    <main>
      {/* <h1>{games.length} Current Matches</h1> */}
      <ClientTest />

      <ul className="mt-4 flex gap-2 flex-col justify-center items-center p-2 rounded-md bg-alt-950 border-2 border-alt-800 ">
        {/* {games.map((game) => (
          <OneGame key={game.fixture.id} game={game} amount={47} />
        ))} */}
      </ul>
    </main>
  );
}
