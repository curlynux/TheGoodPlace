import express from "express";
import next from "next";
import os from "os";

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
.then(() => {
  const server = express();

  server.get("*", (req, res) => handle(req, res));
  server.listen(port, "0.0.0.0", (err) =>
  {
    if (err) throw err
      console.log(`it's working !! on: ${port} :D !`);
  })
})

var ip = () => {
var ifaces = os.networkInterfaces();

Object.keys(ifaces).forEach(ifname => {
  var alias = 0;

  ifaces[ifname].forEach(iface => {
    if ("IPv4" !== iface.family || iface.internal !== false) return;
    if (alias >= 1) console.log(iface.address);
    else console.log(iface.address);
    ++alias;
  });
});
}
ip();
