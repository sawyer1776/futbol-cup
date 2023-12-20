import express from 'express';
import cors from 'cors';

const fetchGames = async () => {
  const res = await fetch("http://localhost:3001/response");
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const games = await res.json();

  return games;
};

const app = express();

app.use(cors());

app.get('/current', async (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders();

  const intervalId = setInterval(async () => {
    try {
      const games = await fetchGames();
      res.write(`data: ${JSON.stringify(games)}\n\n`);
    } catch (error) {
      console.error('Error fetching games:', error);
    }
  }, 1000);

  req.on('close', () => {
    clearInterval(intervalId);
    res.end();
  });
});

app.listen(3002, () => {
  console.log('Server is running on port 3002');
});