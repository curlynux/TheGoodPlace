import express from "express";
import next from "next";

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
.then(() => {
  const server = express();

  server.get("*", (req, res) => handle(req, res));
  server.listen(port, (err) =>
  {
    if (err) throw err
      console.log(`it's working !! on port: ${port} :D !`);
  })
})
