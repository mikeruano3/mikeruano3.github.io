import React, {Component} from 'react'
import { Grid, Cell } from 'react-mdl'

class Education extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <h6>{this.props.educationItem.startDate} - {this.props.educationItem.endDate}
                        </h6>
                    </Cell>
                    <Cell col={6}>
                        <h4>{this.props.educationItem.institution}</h4>
                        <h5>{this.props.educationItem.degree}</h5>
                        <h5>{this.props.educationItem.achievements}</h5>
                        { this.props.educationItem.description === "" ? <h5>{this.props.educationItem.description}</h5> : ""}
                    </Cell>
                    <Cell col={2}>
                        <img alt={this.props.educationItem.institution}
                            style={{width: '100px'}}
                            src={require(`../../img/${this.props.educationItem.image}`)} />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Education