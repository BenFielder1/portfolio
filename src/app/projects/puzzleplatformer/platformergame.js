//importing libraries
import React from 'react'

import { Header } from "../../components/header";

import App from "./app"

//importing the game
import Game1 from "./game1"
import Game2 from "./game2"

//the css used on the webpage
import "./index.css"

export default function PlatformerGame() {
  return (
    <div>
      <Header active={""} />
    <App /><Game1 /><Game2 /></div>
  );
}