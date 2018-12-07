import os from "os";

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
