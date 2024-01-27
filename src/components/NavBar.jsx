import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Link to={"/AllParking"}>
        <button>AllParking</button>
      </Link>
      <Link to={"/chooseParking"}>
        <button>Parking</button>
      </Link>
      <Link to={"/History"}>
        <button>History</button>
      </Link>
      <Link to={"/chooseParking"}>
        <button>EXIT</button>
      </Link>
    </div>
  );
}
