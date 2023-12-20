export function GET(req, res) {
  console.log("Getting");
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders();

  // Send an event every second
  let count = 0;
  const intervalId = setInterval(() => {
    res.write(`data: ${count}\n\n`);
    count++;
  }, 1000);

  // Stop sending events when the client closes the connection
  req.on('close', () => {
    clearInterval(intervalId);
    res.end();
  });
}