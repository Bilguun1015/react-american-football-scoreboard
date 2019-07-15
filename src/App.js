//TODO: STEP 1 - Import the useState hook.
import React,{ useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import ScoreBoard from "./ScoreBoard";
import Buttons from "./Buttons";

function App() {
  const [lionsScore, lionsSetScore] = useState(0);
  const [tigersScore, tigersSetScore] = useState(0);
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  // const [lionsScore, lionsSetScore] = useState(0);
  // const [tigersScore, tigersSetScore] = useState(0);
  return (
    <div className="container">
      <section className="scoreboard">
        <ScoreBoard lionsScore = {lionsScore} tigersScore={tigersScore} />
        <BottomRow />
      </section>
        <Buttons lionsSetScore={lionsSetScore} lionsScore = {lionsScore} tigersSetScore={tigersSetScore} tigersScore={tigersScore} />
    </div>
  );
}

export default App;
