const jsonServer = require("json-server");
const server = jsonServer.create();

const router = jsonServer.router("data/db.json"); // <== Will be created later
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3200; // <== You can change the port

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});
const router = jsonServer.router("data/db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3200;

server.use(middlewares);
server.use(router);

server.listen(port);
