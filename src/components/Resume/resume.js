import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import ProfilePic from '../Images/ProfilePic'
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import EducationData from '../../messages/english/education.json'
import ExperienceData from '../../messages/english/experience.json'
import SkillsData from '../../messages/english/skills.json'
import { lang } from '../../strings/languaje'

class Resume extends Component {

    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4} className="resume-left-col">
                        <ProfilePic className=""/>
                        <h2>Miguel Ruano</h2>
                        <h4>Developer</h4>
                        <hr/>
                            {lang.aboutme}
                        <hr/>
                        <h5>Address</h5>
                        <p>Guatemala City</p>
                        <h5>Phone</h5>
                        <p>32043114</p>
                        <h5>Email</h5>
                        <p>miguelruano35@gmail.com</p>
                        <h5>LinkedIn</h5>
                        <p>https://www.linkedin.com/in/miguelruanoroca/</p>
                        <hr/>
                    </Cell>
                    <Cell col={8} className="resume-right-col">
                        <h2>Experience</h2>
                        {ExperienceData.map((item, i) => {     
                            return (<Experience key={i} experienceItem={item} />) 
                        })}
                        <hr/>
                        <h2>Education</h2>
                        {EducationData.map((item, i) => {     
                            return (<Education key={i} educationItem={item} />) 
                        })}
                        <hr/>
                        <h2>Skills</h2>
                        <Grid>
                            <Cell col={6}>
                                <h5>Hard Skills</h5>
                                {SkillsData.map((item, i) => {    
                                    if(item.column === 1){
                                        return (<Skills key={i} skillItem={item} />)
                                    }else{
                                        return ""
                                    }
                                })}
                            </Cell>
                            <Cell col={6}>
                                <h5>Soft Skills</h5>
                                {SkillsData.map((item, i) => {    
                                    if(item.column === 2){
                                        return (<Skills key={i} skillItem={item} />)
                                    }else{
                                        return ""
                                    }
                                })}
                            </Cell>
                        </Grid>
                        <hr/>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume