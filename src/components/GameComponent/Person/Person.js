import React, { useEffect, useState } from 'react'
import './Person.css'
import walkingImg from '../../../assets/img/mario/walking.svg'

let lastPosition = null

const Person = props => {
    const [walkStyle, setWalkStyle] = useState([])
    const { personCurrentPositionInScreen } = props

    useEffect(() => {

        if (lastPosition && lastPosition > personCurrentPositionInScreen) {
            setWalkStyle(['walkBackwards'])
        }
        if (lastPosition && lastPosition < personCurrentPositionInScreen) {
            setWalkStyle(['walkFordwars'])
        }

        lastPosition = personCurrentPositionInScreen

    }, [personCurrentPositionInScreen, walkStyle])

    const personHeight = 25;
    const personWidth = 15;
    return <div
        style={{
            position: 'absolute',
            top: `${props.sceneViewHeight - personHeight - 3}vh`,
            bottom: `0%`,
            width: `${personWidth}vh`,
            height: `${personHeight}vh`,
            left: `${personCurrentPositionInScreen}%`,
            zIndex: 1,
            transition: 'left 0.6s ease-in',
        }}>
        <div
            key={Math.random(10)}
            style={{
                zIndex: 2,
                width: `${personWidth}vh`,
                height: `${personHeight}vh`,
                backgroundImage: `url(${walkingImg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '800%',
            }}
            className={walkStyle.join(', ')}
        >
        </div>
    </div>
}

export default Person