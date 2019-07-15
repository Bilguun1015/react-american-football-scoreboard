import React, {useState} from "react";
//import "./App.css";

const Button = (useState) => {
    return (
        <section className="buttons">
        <div className="homeButtons">
            {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
            <button className="homeButtons__touchdown" onClick={()=>useState.lionsSetScore(useState.lionsScore + 7)}>Home Touchdown</button>
            <button className="homeButtons__fieldGoal" onClick={()=>useState.lionsSetScore(useState.lionsScore + 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
            <button className="awayButtons__touchdown" onClick={()=>useState.tigersSetScore(useState.tigersScore + 7)}>Away Touchdown</button>
            <button className="awayButtons__fieldGoal" onClick={()=>useState.tigersSetScore(useState.tigersScore + 3)}>Away Field Goal</button>
        </div>
        </section>
        );
};
export default Button;

   /* <section className="buttons">
        <div className="homeButtons">
          <button className="homeButtons__touchdown" onClick={()=>lionsSetScore(lionsScore + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={()=>lionsSetScore(lionsScore + 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={()=>tigersSetScore(tigersScore + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={()=>tigersSetScore(tigersScore + 3)}>Away Field Goal</button>
        </div>
      </section> */