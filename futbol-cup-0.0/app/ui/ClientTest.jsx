"use client";

import { useState, useEffect } from "react";
import OneGame from "./OneGame";

export default function ClientTest() {
  const [count, setCount] = useState([
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
          logo: "",
          winner: null,
        },
        away: {
          id: 0,
          name: "Away",
          logo: "",
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
    console.log("connected", eventSource);

    eventSource.onmessage = (event) => {
      const test = JSON.parse(event.data);
      console.log("event", test[0]);
      setCount(test);
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <main>
      <ul>
        {count.map((game) => (
          <OneGame
            key={game.fixture.id}
            game={game}
            amount={Math.floor(Math.random() * (80 - 20 + 1)) + 20}
          />
        ))}
      </ul>
    </main>
  );
}
