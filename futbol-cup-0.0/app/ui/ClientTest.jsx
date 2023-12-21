"use client";

import { useState, useEffect } from "react";
import OneGame from "./OneGame";

export default function ClientTest() {
  const [games, setGames] = useState([
    {
      fixture: {
        id: 0,
        status: {
          long: "Not Started",
          short: "NS",
          elapsed: 0,
        },
      },

      teams: {
        home: {
          id: 0,
          name: "Home",
          logo: false,
          winner: null,
        },
        away: {
          id: 0,
          name: "Away",
          logo: false,
          winner: null,
        },
      },
      goals: {
        home: 0,
        away: 0,
      },
    },
  ]);
  useEffect(() => {
    const eventSource = new EventSource("http://localhost:3002/current");
    console.log("connected");

    eventSource.onmessage = (event) => {
      console.log("new event");
      if (event.data !== "undefined") {
        setGames(JSON.parse(event.data));
      }
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <>
      {games.map((game) => (
        <OneGame
          key={game.fixture.id}
          game={game}
          amount={Math.floor(Math.random() * (80 - 20 + 1)) + 20}
        />
      ))}
    </>
  );
}
