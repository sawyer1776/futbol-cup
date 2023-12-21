"use client";
import Link from "next/link";
import OneGame from "./ui/OneGame";
import ClientTest from "./ui/ClientTest";

export default function page({ params }) {
  return (
    <main>
      <h1 className="text-xl text-center font-bold mt-6">Current Matches</h1>
      <ul className="mt-4 flex gap-3 flex-col justify-center items-center p-2 rounded-md bg-alt-950 border-2 border-alt-800 ">
        <ClientTest />
      </ul>
    </main>
  );
}
