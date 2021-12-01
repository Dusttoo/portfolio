import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { pause, resume, restart } from '../../store/gameplay'

export default function ScoreBoard(props) {
    const dispatch = useDispatch()
    const game = useSelector((state) => state.game)


    const { score, isRunning, gameOver, currentLevel } = game

    return (
        <div className="score-board">
            <div className="score-container">Score: <span className="score">{ score }</span></div>
            <div className="score-container">Level: <span className="score">{currentLevel}</span></div>
            <button className="score-board-button" onClick={(e) => {
                if (gameOver) { return }
                if (isRunning) {
                    dispatch(pause())
                } else {
                    dispatch(resume())
                }
            }}>{isRunning ? <FontAwesomeIcon icon={faPause} className="arrows"/> : <FontAwesomeIcon icon={faPlay} className="arrows"/>}</button>
            <button className="score-board-button" onClick={(e) => {
                dispatch(restart())
            }}>Restart</button>
        </div>
    )
}