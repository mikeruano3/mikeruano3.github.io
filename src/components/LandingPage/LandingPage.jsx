import React from 'react';
//import { Grid, Cell } from 'react-mdl'
//import ProfilePic from '../Images/ProfilePic';
import './LandingPage.css'
//import InfoBanner from './InfoBanner/InfoBanner'
import { SpaceLayout } from '../3DViews/spaceLayout/spaceLayout';
import MainContent from './MainContent/MainContent';

const LandingPage = props => {
    
    return (<div className="landing-grid">
            <SpaceLayout >
                <MainContent />                          
            </SpaceLayout>
        </div>
    )
}

export default LandingPage