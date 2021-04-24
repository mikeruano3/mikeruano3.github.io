import React, { useRef } from 'react'
import { Grid, Cell } from 'react-mdl'
import VideoSnippets from '../VideoSnippets/VideoSnippets'
import './InfoCard.scss'
import useOnScreen from '../../../hooks/useOnScreenHook'

const InfoCard = props => {
    const ref = useRef()
    const isVisible = useOnScreen(ref)

    const titleContent = <div>
        <h1>{props.title}</h1>
        <h5>{props.content}</h5>
    </div>

    const video = <div style={{marginTop: '5vh'}}>
        <VideoSnippets url={props.url} isPlaying={isVisible}/>
    </div>

    let leftGrid = 3
    let rightGrid = 9
    let leftContent = titleContent
    let rightContent = video

    if(props.direction === 'right'){
        leftGrid = 9
        rightGrid = 3
        leftContent = video
        rightContent = titleContent
    }

    return <div className="video_card" ref={ref}>
        <Grid>
                <Cell col={leftGrid}>
                   {leftContent}
                </Cell>
                <Cell col={rightGrid}>
                    {rightContent}
                </Cell>
            </Grid>
    </div>
}

export default InfoCard