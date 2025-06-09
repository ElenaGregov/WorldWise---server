import jsonServer from 'json-server';
import cors from 'cors';

const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Make sure path is correct
const middlewares = jsonServer.defaults();

// Allow CORS from your frontend URL
server.use(cors({
  origin: 'https://worldwise-eg.netlify.app',
  optionsSuccessStatus: 200,
}));

server.use(middlewares);

// Serve API from root so '/cities' matches your fetch
server.use('/', router);

const PORT = process.env.PORT || 10000;
server.listen(PORT, () => {
  console.log(`JSON Server running on port ${PORT}`);
});
