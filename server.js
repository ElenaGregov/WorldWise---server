import jsonServer from "json-server";
import cors from "cors";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Enable CORS for all routes and origins
server.use(cors());
server.use(middlewares);
server.use("/cities", router);

const PORT = process.env.PORT || 10000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
