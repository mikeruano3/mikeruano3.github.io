import React from 'react';
import { Grid, Cell } from 'react-mdl'
import ProfilePic from '../Images/ProfilePic';
import './LandingPage.css'

const LandingPage = props => {
    return (
        <div className="landing-grid">
            <Grid >
                <Cell col={12}>
                    <ProfilePic className="profile-image" />
                </Cell>
            </Grid>

            <Grid >
                <Cell col={12}>
                    <div className="banner-div">
                        <h1>Full Stack Web Developer</h1>
                        <hr />
                        <p> 
                         React
                        | Angular
                        | HTML/CSS
                        | Bootstrap
                        | JavaScript
                        | NodeJS
                        | Docker
                            </p>
                        <div className="social-links">
                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/in/miguelruanoroca" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin" aria-hidden="true" />
                            </a>

                            {/* Github */}
                            <a href="https://github.com/mikeruano3" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github" aria-hidden="true" />
                            </a>

                            {/* Youtube */}
                            <a href="https://www.youtube.com/user/MRmoogle10" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-youtube" aria-hidden="true" />
                            </a>

                            {/* Twitter */}
                            <a href="https://twitter.com/mikeruano3" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-twitter" aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </Cell>
            </Grid>
        </div>
    )
}

export default LandingPage