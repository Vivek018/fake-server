const jsonServer = require("json-server");
const cors = require("cors");
const server = jsonServer.create();

const router = jsonServer.router("data/db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3200;

server.use(cors());
server.use(middlewares);
server.use(router);

server.listen(port);
