import React, {Component} from 'react'
import { Grid, Cell } from 'react-mdl'

class Experience extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <h5 style={{fontWeight: 'bold'}}>{this.props.experienceItem.startDate} - {this.props.experienceItem.endDate}
                        </h5>
                    </Cell>
                    <Cell col={6}>
                        <h4>{this.props.experienceItem.institution}</h4>
                        <h4>{this.props.experienceItem.jobName}</h4>
                        <h6>{this.props.experienceItem.jobDescription}</h6>
                    </Cell>
                    <Cell col={2}>
                        <img alt={this.props.experienceItem.institution}
                            style={{width: '90px'}}
                            src={require(`../../img/${this.props.experienceItem.image}`)} />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Experience