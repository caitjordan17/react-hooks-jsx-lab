import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  const divStyle = {
    color: 'firebrick'
  }
  return (
    <div id="home">
      <div>
        <h1 style={divStyle}>{name } is a Web Developer from {city }</h1>
      </div>
    </div>
  )
}

export default Home;
