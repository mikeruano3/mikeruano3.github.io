import React  from 'react'
import { Grid, Cell } from 'react-mdl'
import sgyt from '../../assets/img/sgyt.png'
import infoutility from '../../assets/img/infoutility.jpg'
import usaclogo from '../../assets/img/usaclogo.png'

const Experience = props =>{

    const imgs = {  usaclogo: usaclogo, sgyt: sgyt, infoutility: infoutility}

        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <h5 style={{fontWeight: 'bold'}}>{props.experienceItem.startDate} - {props.experienceItem.endDate}
                        </h5>
                    </Cell>
                    <Cell col={6}>
                        <h4>{props.experienceItem.institution}</h4>
                        <h4>{props.experienceItem.jobName}</h4>
                        <h6>{props.experienceItem.jobDescription}</h6>
                    </Cell>
                    <Cell col={2}>
                        <img alt={props.experienceItem.institution}
                            style={{width: '90px'}}
                            src={imgs[props.experienceItem.image]} />
                    </Cell>
                </Grid>
            </div>
        )
}

export default Experience