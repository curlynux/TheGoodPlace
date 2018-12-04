import Head from "./head";
import Navbar from "./components/header/navbar"

var blaze = "curlynux";
var tst = () => (
  <div className="container is-fluid">
    <Head />
    <Navbar />
    <h1 className="title">{blaze}</h1>
    <span className="tag is-dark">text</span>
  </div>);
export default tst;
