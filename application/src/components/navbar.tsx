import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex">
      <h1 className="font-bold">Navigation Bar : </h1>
      <Link className="mx-2" to="/home">
        Home
      </Link>
      <Link className="mx-2" to="/detail">
        Detail
      </Link>
      <Link className="mx-2" to="/">
        Login
      </Link>
    </div>
  );
}
