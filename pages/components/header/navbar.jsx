import Head from "../../head";
import Link from "next/link";
import "../../../static/css/navbar.css";

var navbar = () =>
( 
  <div className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link href="/"><a>The Good Place</a></Link>
    </div>
  </div>
);

export default navbar
