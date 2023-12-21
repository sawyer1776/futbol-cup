import express from 'express';
import cors from 'cors';
import 'dotenv/config'

const fetchGames = async () => {
  const res = await fetch("http://localhost:3001/response");
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const gamesRes = await res.json();

  return gamesRes;
};

const fetchLiveGames = async () => {
  console.log('FETCHING LIVE DATA')
  const url = process.env.API_URL;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.X_RAPID_API_KEY,
      'X-RapidAPI-Host': process.env.X_RAPID_API_HOST
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }

}

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
  let newGames = await fetchLiveGames();
  // let newGames = await fetchGames();
  newGames = JSON.stringify(newGames.response);
  if (newGames !== games) {
    broadcastMessage(newGames)
    games = newGames;
  }
}, 180000);


app.get('/current', async (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders();

  connections.push(res);

  if (connections.length === 1) {
    // games = await fetchGames();
    games = await fetchLiveGames();
  }
  //add .response to games for live games
  res.write(`data: ${JSON.stringify(games.response)}\n\n`);

  req.on('close', () => {
    console.log('Connection closed');
    connections = connections.filter(conn => conn !== res);
    res.end();
  });
});

app.get('/test', async (req, res) => {
  try {
    const result = await fetchLiveGames(); res.send(result);
  } catch (error) {
    console.error(error);
  }

})

app.listen(3002, () => {
  console.log('Server is running on port 3002');
});