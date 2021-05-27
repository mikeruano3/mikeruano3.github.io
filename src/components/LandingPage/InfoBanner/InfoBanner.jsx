import React from 'react';
import './InfoBanner.scss'

const InfoBanner = props => {
    return (
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
    )
}

export default InfoBanner