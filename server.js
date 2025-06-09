import jsonServer from 'json-server';
import cors from 'cors';

const server = jsonServer.create();
const router = jsonServer.router('db.json'); // db.json is in same folder
const middlewares = jsonServer.defaults();

server.use(cors({
  origin: 'https://worldwise-eg.netlify.app', // your frontend URL here
  optionsSuccessStatus: 200,
}));

server.use(middlewares);
server.use('/', router); // Serve db.json at root

const PORT = process.env.PORT || 10000;
server.listen(PORT, () => {
  console.log(`JSON Server running on port ${PORT}`);
});
