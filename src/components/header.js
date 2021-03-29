import React from 'react';
import { Link } from "react-router-dom";
import RenewIcon from "@material-ui/icons/Autorenew";

export default function Header() {
  return (
    <header>
      <Link to="/" onClick={() => console.log("clicked!")} className="random-btn">
        random
        <RenewIcon style={{marginLeft: "10px"}}/>
      </Link>
    </header>
  )
};
