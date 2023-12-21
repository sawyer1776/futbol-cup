"use client";

import Image from "next/image";
import Slider from "./Slider";
import { useState, useEffect } from "react";

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
      {/* <Slider amount={amount} type={"POS"} /> */}
    </li>
  );
}
