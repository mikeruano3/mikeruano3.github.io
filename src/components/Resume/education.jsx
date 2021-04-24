import React from 'react'
import { Grid, Cell } from 'react-mdl'
import './resume.scss'

const Education = props => {

    return (
        <div>
            <Grid>
                <Cell col={4}>
                    <h6>{props.educationItem.startDate} - {props.educationItem.endDate}
                    </h6>
                </Cell>
                <Cell col={6}>
                    <h3 className="no_margin_bottom">
                        {props.educationItem.institution}
                    </h3>
                    <h5 className="job_name">
                        {props.educationItem.degree}
                    </h5>
                    <h6 className="job_name">
                        <i>{props.educationItem.achievements}</i>
                    </h6>
                    <h6 className="job_desc">
                        {props.educationItem.description}
                    </h6>
                </Cell>
                <Cell col={2}>
                    <img alt={props.educationItem.institution}
                        style={{ width: '100px'}}
                        src={props.educationItem.image} />
                </Cell>
            </Grid>
        </div>
    )
}

export default Education