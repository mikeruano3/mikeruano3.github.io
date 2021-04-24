import React from 'react'
import './ShootingStarBg.scss'

const ShootingStar = props => {
    return <div className="shooting_body" style={{ height: props.height }}>
        
        <div className="night">
            <h1>{props.title}</h1>
        { Array.from({length: 20}, () => <div className="shooting_star" key={Math.random(5)}></div>) }
        </div>
    </div>
}

export default ShootingStar