import React, { useEffect } from 'react';
import GridBoard from '../Grid/GridBoard'
import NextBlock from '../Grid/NextBlock'
import ScoreBoard from '../ScoreBoard/ScoreBoard'
import Controls from '../Controls/Controls'
import MessagePopup from '../MessagePopup/MessagePopup'
import '../../App.css'
import { useSelector } from 'react-redux';

function Tetris() {
// console.log(e.keycode)
//   let keycode = e.key;
//   // useEffect(() => {
//   //   console.log(keycode)
//   // }, [e, keycode])
//   // 
    const scores = useSelector((state) => state.highScores)
    const eachScore = []
    Object.values(scores).map((score) => (eachScore.push(score)))

    const highScore = (eachScore) => {
        let highest = 0;
        let highestId = 0;
        eachScore.map((score) => {
             console.log(score)
            if (score.score >= highest) {
                highestId = score.id
                highest = score.score
            }
        })

        return highestId
    }
    const highestScoreId = highScore(eachScore);
    const highestScore = eachScore.find(oneScore => +highestScoreId === oneScore.id);
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Need a break?</h1>
        <h2>Play a game of Tetris I built</h2>
          <div className="score-container">Current High Score: {highestScore ?<span className="score">{highestScore.name}: {highestScore.score}</span>: <span>No High Score Yet</span>}</div>

      </header>
      <GridBoard />
      <NextBlock />
      <ScoreBoard />
      <Controls />
      <MessagePopup />
    </div>
  );
}



export default Tetris;