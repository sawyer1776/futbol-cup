import { NextResponse } from 'next/server'
import { fetchGames } from '../lib/dataFetching.js'

// export const runtime = 'nodejs';
// This is required to enable streaming
// export const dynamic = 'force-dynamic';

export async function GET(req, res) {
  console.log('req', req.socket)
  let responseStream = new TransformStream();
  const writer = responseStream.writable.getWriter();
  const encoder = new TextEncoder();
  let count = 0;

  // writer.write(encoder.encode('Vercel is a platform for....'));
  try {

    const intervalId = setInterval(async () => {
      const games = await fetchGames();
      // console.log(games[0].goals)

      const data = `data: ${count}\n\n`;
      await writer.write(encoder.encode(data));
      count++;
    }, 2000);
  } catch (e) {
    console.error('Its an ERROR', e);
    writer.close();
  }
  // req.on('close', () => {
  //   console.log("CLOSED!!!!!!");
  // });

  return new Response(responseStream.readable, {
    headers: {
      'Content-Type': 'text/event-stream',
      Connection: 'keep-alive',
      'Cache-Control': 'no-cache, no-transform',
    },
  });
}



// export function GET(req, res) {
//   // const data = '1';
//   // const headers = { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache', 'Connection': 'keep-alive' };
//   // const options = { status: 200, statusText: "event stream opened", headers: headers };

//   // return new NextResponse(data, options);

//   // console.log("Getting");
//   res.setHeader('Content-Type', 'text/event-stream');
//   res.setHeader('Cache-Control', 'no-cache');
//   res.setHeader('Connection', 'keep-alive');
//   res.flushHeaders();

//   //Send an event every second
//   let count = 0;
//   const intervalId = setInterval(() => {
//     res.write(`data: ${count}\n\n`);
//     count++;
//   }, 1000);

//   // Stop sending events when the client closes the connection
//   req.on('close', () => {
//     clearInterval(intervalId);
//     res.end();
//   });
// }