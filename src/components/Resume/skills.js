import React, {Component} from 'react'
import { Grid, Cell, ProgressBar } from 'react-mdl'

class Skill extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={12}>
                        <div style={{display: 'flex', margin: '0px', padding: '0px'}}>
                            <h5 style={{marginRight: '1em'}}>{this.props.skillItem.skillName}</h5>
                            { this.props.skillItem.skillScale && (
                                <ProgressBar className="progress-bar-resume" 
                                progress={this.props.skillItem.skillScale}/>
                            )}
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Skill