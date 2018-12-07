import Head from "../../head";
import Link from "next/link";
import "../../../static/css/navbar.css";

var navbar = () =>
(
  <nav id="navbar" class="navbar has-shadow is-spaced is-black">
    <div className="container" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link href="/"><a className="navbar-item">The Good Place</a></Link>
        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbar">
          <span aria-hidden="true"/>
          <span aria-hidden="true"/>
          <span aria-hidden="true"/>
        </a>
      </div>
      <div id="navbar" className="navbar-menu is-active">
        <div className="navbar-start">
          <Link href="/"><a>Home</a></Link>
        </div>
        <div className="navbar-start">
          <Link href="#"><a>Offres</a></Link>
        </div>
        <div className="navbar-start">
          <Link href="#"><a>Demandes</a></Link>
        </div>
        <div className="navbar-start">
          <Link href="#"><a>Mes annonces favoris</a></Link>
        </div>
        <div className="navbar-start">
          <Link href="#"><a>Boutiques</a></Link>
        </div>
        <div className="navbar-start">
          <Link href="#"><a>Messages</a></Link>
        </div>
        <div className="navbar-start">
          <Link href="#"><a>Connexion</a></Link>
        </div>
        <div className="navbar-start">
          <Link href="#"><a>Aide</a></Link>
        </div>
        <div className="navbar-item-has-dropdown">
          <Link href="#"><a className="navbar-link">Plus</a></Link>
          <div className="navbar-dropdown">
            <Link href="#"><a className="navbar-item">A Propos</a></Link>
            <Link href="#"><a className="navbar-item">Recrutement</a></Link>
            <Link href="#"><a className="navbar-item">Contact</a></Link>
            <hr className="navbar-divider"/>
            <Link href="#"><a className="navbar-item">signaler une erreur</a></Link>
          </div>
        </div>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <Link href="#"><a className="button is-primary"><strong>inscription</strong></a></Link>
            <Link href="#"><a className="button is-light">connexion</a></Link>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default navbar
