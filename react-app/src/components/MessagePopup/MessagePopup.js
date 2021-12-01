import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addScores } from '../../store/scores'

// Displays a message
export default function MessagePopup() {
  const dispatch = useDispatch()
  const game = useSelector((state) => state.game)
  const isRunning = useSelector((state) => state.game.isRunning)
  const gameOver = useSelector((state) => state.game.gameOver)
  const {score} = game;
  const [name, setName] = useState("");


  let message = ''
  let isHidden = 'hidden'

  if (gameOver) {
    message = 'Game Over'
    isHidden = ''
  } else if (!isRunning) {
    message = 'Paused'
    isHidden = ''
  }

    const handleSubmit = async (e) => {
    e.preventDefault();

    const newScore = {
      name,
      score
    };
    await dispatch(addScores(newScore));      
    }

    


  return (
    <div className={`message-popup ${isHidden}`}>
      <h1>{message}</h1>
      {gameOver ? 
        <form onSubmit={handleSubmit} className="score-form">
          <div className="scoreLabel">
            <label className="score-label">
              Your Name:
            </label>
            <input
              className="score-input"
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required/>
          </div>
        </form> :<></>}
    </div>
  )
}