import React, { useState, useCallback } from 'react'
import SceneView from '../SceneView/SceneView'

let timeOutRef = null

const GameLayout = props => {
    const viewHeight = 90
    
    const sceneMaxUpperRange = 1000

    const personJumpPerClick = 10
    const sceneMovementPerClick = 20

    const [personCurrentPositionInScreen, setPersonCurrentPositionInScreen] = useState(50)
    const [sceneCurrentPosition, setSceneCurrentPosition] = useState(0)

    const walkForward = useCallback(() => {
        const newPosition = personCurrentPositionInScreen + personJumpPerClick
        if ((newPosition) > 90) {
            const newScenePosition = sceneCurrentPosition + sceneMovementPerClick
            if (newScenePosition <= sceneMaxUpperRange) {
                setSceneCurrentPosition(newScenePosition)
            }
        } else {
            setPersonCurrentPositionInScreen(newPosition)
        }
    }, [personCurrentPositionInScreen, sceneCurrentPosition])

    const walkBackwards = useCallback(() => {
        const newPosition = personCurrentPositionInScreen - personJumpPerClick
        if ((newPosition) < 10) {
            const newScenePosition = sceneCurrentPosition - sceneMovementPerClick
            if (newScenePosition >= 0) {
                setSceneCurrentPosition(newScenePosition)
            }
        } else {
            setPersonCurrentPositionInScreen(newPosition)
        }
    }, [personCurrentPositionInScreen, sceneCurrentPosition])

    document.addEventListener('keydown', function (e) {
        let fnToExec = null
        switch (e?.key) {
            case "ArrowLeft":
                fnToExec = walkBackwards
                break;
            case "ArrowRight":
                fnToExec = walkForward
                break;
            case "ArrowUp":
                break;
            case "ArrowDown":
                break;
            default:
                break;
        }


        if(fnToExec){
            if(timeOutRef ){
                clearTimeout(timeOutRef)
            }
            timeOutRef = setTimeout(() => {
                console.log('executing', e?.key);
                fnToExec()
            }, 500)
        }
    })

    return <div>
        {personCurrentPositionInScreen}
        <button onClick={walkForward} >Forward</button>
        <button onClick={walkBackwards} >Backward</button>
            scene current position: {sceneCurrentPosition}
        <hr/>
        <SceneView sceneCurrentPosition={sceneCurrentPosition}
            personCurrentPositionInScreen={personCurrentPositionInScreen}
            sceneViewHeight={viewHeight} />
    </div>
}

export default GameLayout