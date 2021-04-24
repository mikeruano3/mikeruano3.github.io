import React, { useState } from 'react'
import InfoCard from '../InfoCard/InfoCard'
import { Link, Element } from 'react-scroll'
import './VideoView.scss'
import { Grid, Cell } from 'react-mdl';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Redirect } from 'react-router-dom'

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
}

const MotionItem = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
}


const VideoView = props => {
    const [redirectToMain, setRedirectToMain] = useState(false)
    
    const backToMain = (event) => {
        setRedirectToMain(true)
        props.onBackToMain(event)
    }

    const onPlayVideo = (data) => {
        console.log(data)
    }

    return <div>
        {redirectToMain && <Redirect to="/projects"/>}
        <Grid style={{}}>
            <Cell col={2} className="table-of-contents" style={{ margin: 0, padding: 0 }}>

                <div className="table-of-contents-title">
                    <div style={{ cursor: 'pointer' }}
                        onClick={backToMain}>
                    <h6>
                        <FontAwesomeIcon icon={faChevronLeft} style={{ marginRight: '5px' }}/>
                        Back to all projects</h6>
                    </div>
                    <h1>{props.title}</h1>
                    <h3>{props.subtitle}</h3>
                </div>
                <br />
                <div className="table-of-contents-list">
                    <motion.ul
                        className="container"
                        variants={container}
                        initial="hidden"
                        animate="visible"
                    >
                        {
                            props.info.map(item =>
                                <motion.li key={item.key} variants={MotionItem} >
                                    <Link
                                        style={{ color: 'black' }}
                                        activeClass="active-scroll" to={item.key}
                                        spy={true} smooth={true} duration={250} containerId="containerElement"
                                    >
                                        {item.tocLabel}
                                    </Link>
                                </motion.li>
                            )
                        }
                        {
                            /**
                             * <Link
                                style={{ color: 'black' }}
                                activeClass="active-scroll" to="secondInsideContainer"
                                spy={true} smooth={true} duration={250} containerId="containerElement"
                                >
                                    Go to second element inside container
                                </Link>
                             <li> <a href="#options" class="">Options</a> </li>
                             */
                        }
                    </motion.ul>
                </div>
            </Cell>
            <Cell col={10} className="video-contents">
                <Element name="test7" className="containerElement" id="containerElement" style={{
                    position: 'relative',
                    height: '88vh',
                    overflowY: 'scroll'
                }}>
                    <ul>
                        {props.info.map(item =>{
                            return <li key={item.key}>
                                <Element name={item.key} key={item.key} style={{
                                    marginBottom: '0px'
                                }}>
                                    <InfoCard {...item} onPlayVideo={onPlayVideo} />
                                </Element>
                            </li>
                            }
                        )
                        }
                    </ul>
                </Element>
            </Cell>
        </Grid>
    </div>
}

export default VideoView