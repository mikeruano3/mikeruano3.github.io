import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell } from 'react-mdl'
import ProjectCard from './project-card'
import ProjectData from '../../data/projects.json'

class Projects extends Component {
    constructor(props){
        super(props)
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        let listData;
        if(this.state.activeTab === 0){
            listData = ProjectData.React
        }else if(this.state.activeTab === 1){
            listData = ProjectData.Angular
        }else if(this.state.activeTab === 2){
            listData = ProjectData.NodeJS
        }else if(this.state.activeTab === 3){
            listData = ProjectData.Docker
        }
        return(
            <div className="projects-grid">
                {listData && listData.map((item, i) => {     
                    return (<ProjectCard key={i} item={item} />) 
                })}
            </div>
        )
    }

    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} 
                    onChange={(tabId)=> this.setState({ activeTab: tabId})}
                    ripple>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>NodeJS</Tab>
                    <Tab>Docker</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        {this.toggleCategories()}
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects