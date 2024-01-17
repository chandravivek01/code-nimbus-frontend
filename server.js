// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('data.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.get('/questions/:category', (req, res) => {
  const { category } = req.params;
  const data = router.db.get('questions').get(category).value();
  res.json(data);
});

server.use(router);

const PORT = 3002;
server.listen(PORT, () => {
  console.log(`JSON Server is running at http://localhost:${PORT}`);
});
