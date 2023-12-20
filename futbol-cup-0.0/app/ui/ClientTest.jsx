"use client";

import { useState, useEffect } from "react";

export default function ClientTest() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const eventSource = new EventSource("/api");
    console.log("connected", eventSource);

    eventSource.onmessage = (event) => {
      console.log("event");
      setCount(Number(event.data));
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <main>
      <h1>Client Test</h1>
      <p>Count is {count}</p>
    </main>
  );
}
