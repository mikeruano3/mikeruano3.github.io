import React  from 'react'
import { Grid, Cell } from 'react-mdl'

import './resume.scss'

const Experience = props =>{

        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <h5 style={{fontWeight: 'bold'}}>{props.experienceItem.startDate} - {props.experienceItem.endDate}
                        </h5>
                    </Cell>
                    <Cell col={6}>
                        <h3 className="no_margin_bottom">
                            <a style={{  textDecoration: 'none', color: 'white' }}
                            href={props.experienceItem.url}>
                                {props.experienceItem.institution}
                            </a>
                        </h3>
                        <h4 className="job_name">{props.experienceItem.jobName}</h4>
                        { props.experienceItem.jobDescription } 
                    </Cell>
                    <Cell col={2}>
                        <img alt={props.experienceItem.institution}
                            style={{width: '90px'}}
                            href={props.experienceItem.url}
                            src={props.experienceItem.image} />
                    </Cell>
                </Grid>
            </div>
        )
}

export default Experience