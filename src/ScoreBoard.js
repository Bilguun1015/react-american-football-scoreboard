import React, {useState} from "react";
//import "./App.css";

const ScoreBoard = (useState) => {
    return(
         <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            <div className="home__score">{useState.lionsScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{useState.tigersScore}</div>
          </div>
        </div>
        )
    }
    export default ScoreBoard;

    // <div className="topRow">
    //       <div className="home">
    //         <h2 className="home__name">Lions</h2>

    //         <div className="home__score">{lionsScore}</div>
    //       </div>
    //       <div className="timer">00:03</div>
    //       <div className="away">
    //         <h2 className="away__name">Tigers</h2>
    //         <div className="away__score">{tigersScore}</div>
    //       </div>
    //     </div>
