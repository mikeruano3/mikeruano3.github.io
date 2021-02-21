import React from 'react'
import { Grid, Cell } from 'react-mdl'
import usaclogo from '../../assets/img/usaclogo.png'
import inval from '../../assets/img/inval.png'

const Education = props => {

    const imgs = { usaclogo: usaclogo, inval: inval}

    return (
        <div>
            <Grid>
                <Cell col={4}>
                    <h6>{props.educationItem.startDate} - {props.educationItem.endDate}
                    </h6>
                </Cell>
                <Cell col={6}>
                    <h4>{props.educationItem.institution}</h4>
                    <h5>{props.educationItem.degree}</h5>
                    <h5>{props.educationItem.achievements}</h5>
                    {props.educationItem.description === "" ? <h5>{props.educationItem.description}</h5> : ""}
                </Cell>
                <Cell col={2}>
                    <img alt={props.educationItem.institution}
                        style={{ width: '100px'}}
                        src={imgs[props.educationItem.image]} />
                </Cell>
            </Grid>
        </div>
    )
}

export default Education