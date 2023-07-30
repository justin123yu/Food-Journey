import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" href="/"> Home</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item ">
            <Link className="nav-link" href="/Restaurants">Restaurants</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/Create">Create</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}