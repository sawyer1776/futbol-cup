import express from 'express';
import cors from 'cors';

const fetchGames = async () => {
  const res = await fetch("http://localhost:3001/response");
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const gamesRes = await res.json();

  return gamesRes;
};

const app = express();

app.use(cors());
let connections = [];

const broadcastMessage = (message) => {
  connections.forEach((res, i) => {
    res.write(`data: ${message}\n\n`);
  });
};

let games = [{ goals: [null, null] }];

setInterval(async () => {
  if (connections.length === 0) {
    return;
  }
  const newGames = await fetchGames();
  if (JSON.stringify(newGames) !== JSON.stringify(games)) {
    broadcastMessage(JSON.stringify(newGames))
    games = newGames;
  }
}, 5000);

// setInterval(() => {
//   broadcastMessage(message);
// }, 1000);

app.get('/current', async (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders();

  connections.push(res);

  if (connections.length === 1) {
    games = await fetchGames();
  }

  res.write(`data: ${JSON.stringify(games)}\n\n`);

  req.on('close', () => {
    console.log('Connection closed');
    connections = connections.filter(conn => conn !== res);
    res.end();
  });
});


// const newGames = await fetchGames();
// if (JSON.stringify(newGames) !== JSON.stringify(games)) {
//   connections.forEach(res => {
//     res.write(`data: ${JSON.stringify(newGames)}\n\n`);
//   });
// }


// const writeMsg = async () => {
//   // console.log('now Games', games)
//   const gameses = await fetchGames();
//   res.write(`data: ${JSON.stringify(gameses)}\n\n`);

// }

// writeMsg()

// const intervalId = setInterval(async () => {
//   try {
//     writeMsg()

//   } catch (error) {
//     console.error('Error fetching games:', error);
//   }
// }, 10000);

//   req.on('close', () => {
//     clearInterval(intervalId);
//     res.end();
//   });
// });

app.listen(3002, () => {
  console.log('Server is running on port 3002');
});