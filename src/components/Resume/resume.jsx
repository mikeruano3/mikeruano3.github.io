import React from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import { educationData } from '../../messages/english/education.data'
import { experienceData } from '../../messages/english/experience.data'
import { skillsData } from '../../messages/english/skills.data.js'
import { lang } from '../../strings/languaje'
import './resume.scss'

const certificates = [
    { 
        title: " React - The Complete Guide (incl Hooks, React Router, Redux) ",
        url: "https://www.udemy.com/certificate/UC-ce33efce-cd96-4c1e-855d-dbabdf24df4b"
    }
]

const CertCpnt = props => {
    return <div className="cert-style">
        <h6> {props.title} </h6>
        <p><a href={props.url} rel="noopener noreferrer" target="_blank">
				Check Certificate
			</a></p>
    </div>
}

const Resume = props => {

        return (
            <div className="resume-main-style">
                <Grid>
                    <Cell col={4} className="resume-left-col">
                        <h2>Miguel Ruano</h2>
                        <h4>Developer</h4>
                        <hr />
                        {lang.aboutme}
                        <hr />
                        <h5>Phone</h5>
                        <p>+502 32043114</p>
                        <h5>Email</h5>
                        <p>miguelruano35@gmail.com</p>
                        <h5>LinkedIn</h5>
                        <p>https://www.linkedin.com/in/miguelruanoroca/</p>
                        <hr />
                    </Cell>
                    <Cell col={8} className="resume-right-col">
                        <div className="resume-data">
                            <h2>Experience</h2>
                            {experienceData.map((item, i) => {
                                return (<Experience key={i} experienceItem={item} />)
                            })}
                            <hr />
                            <h2>Education</h2>
                            <h4 id="cert-title">Certificates</h4>
                            {certificates.map((item, i) => {
                                return (<CertCpnt key={i} {...item} />)
                            })}
                            {educationData.map((item, i) => {
                                return (<Education key={i} educationItem={item} />)
                            })}
                            <hr />
                            <h2>Skills</h2>
                            <Grid>
                                <Cell col={6}>
                                    <h5>Hard Skills</h5>
                                    {skillsData.map((item, i) => (
                                        item.column === 1 ? 
                                            (<Skills key={i} skillItem={item} />)
                                        :
                                        null
                                    ))}
                                </Cell>
                                <Cell col={6}>
                                    <h5>Soft Skills</h5>
                                    {skillsData.map((item, i) => (
                                        item.column === 2 ? 
                                        (<Skills key={i} skillItem={item} />)
                                    :
                                    null
                                    ))}
                                </Cell>
                            </Grid>
                            <hr />
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
}

export default Resume