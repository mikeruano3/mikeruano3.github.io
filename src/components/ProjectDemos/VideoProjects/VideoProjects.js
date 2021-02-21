import React, { useRef, useEffect, useState, Suspense, useCallback, useMemo } from 'react'
import ReactPlayer from 'react-player'
import { Grid, Cell } from 'react-mdl'
import './VideoProjects.css'

const VideoProject = props => {
    return <>
        <div className="title-container">
            <h2 className="title-label">TICOCLASP</h2>
        </div>
        <div>
            <p className="content-style">
                <b>Lead developer</b> since July 2020.
        </p>
            <p className="content-style">
                This project is currently being build with Angular and Firebase.
        </p>
        </div>
        <div className='player-wrapper'>
            <ReactPlayer
                muted={true}
                controls={true}
                playing={true}
                loop={true}
                width='100%'
                height='80vh'
                className='react-player'
                url='https://youtu.be/2c6d9HjPAHQ' />
        </div>
    </>
}

export default VideoProject