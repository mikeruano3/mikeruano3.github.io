import React from 'react'
import { CSSTransition } from 'react-transition-group';
import './SceneView.css'
import Person from '../Person/Person'
import SkyImage from '../../../assets/img/mario/sky.png'
import SkyColor from '../../../assets/img/mario/skyColor.png'
import GroundImage from '../../../assets/img/mario/ground2.jpg'

const sceneObjects = [
    { id: 1, lowerRange: 0, upperRange: 99, type: 'block1', legend: 'testing 1', color: 'red' },
    { id: 2, lowerRange: 100, upperRange: 199, type: 'block2', legend: 'testing 2', color: 'blue' },
    { id: 3, lowerRange: 200, upperRange: 299, type: 'block3', legend: 'testing 3', color: 'green' },
    { id: 4, lowerRange: 300, upperRange: 399, type: 'block4', legend: 'testing 4', color: 'yellow' },
    { id: 5, lowerRange: 400, upperRange: 499, type: 'block5', legend: 'testing 5', color: 'black' },
    { id: 6, lowerRange: 500, upperRange: 599, type: 'block6', legend: 'testing 6', color: 'orange' },
    { id: 7, lowerRange: 600, upperRange: 699, type: 'block7', legend: 'testing 7', color: 'beige' },
    { id: 8, lowerRange: 700, upperRange: 799, type: 'block8', legend: 'testing 8', color: 'gray' },
    { id: 9, lowerRange: 800, upperRange: 899, type: 'block9', legend: 'testing 9', color: 'red' },
    { id: 10, lowerRange: 900, upperRange: 999, type: 'block9', legend: 'testing 9', color: 'red' },
]

const SingleSceneDiv = props => {
    return <CSSTransition
            timeout={200}>
        <div
            style={{
                position: 'absolute',
                backgroundImage: `url(${SkyImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: `200%`,
                
                width: `${props.width}%`,
                height: `${props.height}%`,
                left: `${props.leftPosition}%`,
                top: `${props.topPosition}%`,
                transition: 'left 0.5s ease-out' ,
            }}>
            <p>{props.sceneObj.legend}</p>
        </div>
    </CSSTransition>

}

const SceneView = props => {
    const { sceneCurrentPosition, personCurrentPositionInScreen,
        sceneViewHeight } = props
    
    const groundHeight = '10'
    let divList = []

    const checkIfObjectIsInScene = (sceneObject) => {
        if (sceneCurrentPosition >= sceneObject.lowerRange
            && sceneCurrentPosition <= sceneObject.upperRange) {
            return true
        }
        return false
    }

    for (let i = 0; i < sceneObjects.length; i++) {
       
        const mainSceneObj = sceneObjects[i]
        if (checkIfObjectIsInScene(mainSceneObj)) {

            // Scene Main Object
            const rightPosition = sceneCurrentPosition - mainSceneObj.lowerRange
            divList.push(
                <SingleSceneDiv
                    key={mainSceneObj.id}
                    sceneObj={mainSceneObj}
                    width={mainSceneObj.upperRange - mainSceneObj.lowerRange + 1}
                    height={sceneViewHeight}
                    leftPosition={-rightPosition}
                    topPosition={10}
                    transition={rightPosition !== 0 ? 'left 0.5s ease-out' : ''}
                />
            )

            // Next Scene Object
            if (sceneObjects[i + 1]) {
                const nexSceneObj = sceneObjects[i + 1]
                const rightPositionForNext = sceneCurrentPosition - nexSceneObj.lowerRange

                divList.push(
                    <SingleSceneDiv
                        key={nexSceneObj.id}
                        sceneObj={nexSceneObj}
                        width={nexSceneObj.upperRange - nexSceneObj.lowerRange + 1}
                        height={sceneViewHeight}
                        leftPosition={-rightPositionForNext}
                        topPosition={10}
                        transition='left 0.5s ease-out'
                    />
                )
            }
        }
    }

    return <div >
            <div>
                {divList}
            </div>
        
        <Person personCurrentPositionInScreen={personCurrentPositionInScreen}
            sceneViewHeight={sceneViewHeight} />
        <div style={{ 
            position: 'absolute',
            top: `${props.sceneViewHeight - groundHeight}vh`,
            width: '100vw', 
            height: `${groundHeight}vh`, 
            margin: 0, padding: 0,
            backgroundImage: `url(${GroundImage})`,
            backgroundRepeat: 'repeat',
            backgroundSize: `100vw`,
            }}></div>
    </div>
}

export default SceneView