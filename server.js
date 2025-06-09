import jsonServer from 'json-server';
import cors from 'cors';

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// ✅ Allow only your Netlify domain
const corsOptions = {
  origin: 'https://worldwise-eg.netlify.app',
  optionsSuccessStatus: 200
};

server.use(cors(corsOptions)); // Enable CORS with specific origin
server.use(middlewares);
server.use('/', router);

const PORT = process.env.PORT || 10000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
