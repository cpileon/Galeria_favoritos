import "../assets/css/navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="enlace"> Home </Link> | <Link to="/favoritos" className="enlace"> Favoritos </Link>
    </nav>
  );
}
