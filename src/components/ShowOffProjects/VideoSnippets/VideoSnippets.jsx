import React from 'react'
import ReactPlayer from 'react-player'

const VideoSnippets = props => {
    return <div>
        <ReactPlayer
            muted={true}
            controls={true}
            playing={props.isPlaying}
            loop={true}
            width='100%'
            height='100%'
            className='react-player'
            url={props.url}
        />
    </div>
}

export default VideoSnippets