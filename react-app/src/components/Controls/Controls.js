import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight, faArrowAltCircleDown} from "@fortawesome/free-solid-svg-icons";
import { moveDown, moveLeft, moveRight, rotate } from "../../store/gameplay";
import { faRotate } from "@fortawesome/free-solid-svg-icons";

export default function Controls() {
    const dispatch = useDispatch()

    const useKeyboardShortcut = (shortcutKeys, callback) => {
        
    }

    // const handleKeyPress = (e) => {
    //     console.log(e, e.key)

    // }

    const isRunning = useSelector((state) => state.isRunning)
    const gameOver = useSelector((state) => state.game.gameOver)
        return (
        <div className="controls">
            {/* left */}
            <button className="control-button" onClick={(e) => {
                dispatch(moveLeft())
            }}
            ><FontAwesomeIcon icon={faArrowAltCircleLeft} className="arrows"/></button>

            {/* right */}
            <button className="control-button" onClick={(e) => {
                dispatch(moveRight())
            }}
            ><FontAwesomeIcon icon={faArrowAltCircleRight} className="arrows"/></button>

            {/* rotate */}
            <button className="control-button" onClick={(e) => {
                dispatch(rotate())
            }}
            ><FontAwesomeIcon icon={faRotate} className="arrows"/></button>

            {/* down */}
            <button className="control-button" onClick={(e) => {
                dispatch(moveDown())
            }}
            ><FontAwesomeIcon icon={faArrowAltCircleDown} className="arrows"/></button>

        </div>
    )
}