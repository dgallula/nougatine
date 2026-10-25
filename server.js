/**
 * Point d'entrée Phusion Passenger pour o2switch (Setup Node.js App).
 * Application startup file : server.js
 */
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const port = Number.parseInt(process.env.PORT || "3000", 10);
const hostname = process.env.HOSTNAME || "0.0.0.0";
const app = next({
  dev: false,
  hostname,
  port,
  dir: __dirname,
});
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    createServer((req, res) => {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    }).listen(port, hostname, () => {
      console.log(`Nougatine Bakeries ready on http://${hostname}:${port}`);
    });
  })
  .catch((err) => {
    console.error("Next.js failed to start", err);
    process.exit(1);
  });
