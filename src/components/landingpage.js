import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'
import ProfilePic from '../components/Images/ProfilePic'; 

class LandingPage extends Component {
    constructor(props) {
        super(props)
        this.state = { hover: false }
    }

    render(){
        return(
            <div>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <ProfilePic className="profile-image"/>
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr/>
                            <p> HTML/CSS 
                                | Bootstrap
                                | JavaScript
                                | React
                                | Angular
                                | NodeJS
                                | Docker
                            </p>
                            <div className="social-links">
                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/miguelruanoroca" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin" aria-hidden="true"/>
                                </a>

                                {/* Github */}
                                <a href="https://github.com/mikeruano3" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github" aria-hidden="true"/>
                                </a>

                                {/* Youtube */}
                                <a href="https://www.youtube.com/user/MRmoogle10" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-youtube" aria-hidden="true"/>
                                </a>

                                {/* Twitter */}
                                <a href="https://twitter.com/mikeruano3" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-twitter" aria-hidden="true"/>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage