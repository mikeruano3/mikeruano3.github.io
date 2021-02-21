import React, { useState } from 'react'
import { Tabs, Tab, Grid, Cell } from 'react-mdl'
import ProjectCard from './project-card'
import ProjectData from '../../messages/english/projects.json'

const Projects = props => {
    const [activeTab, setActiveTab] = useState(0)

    const returnCardList = (listData) => {
        return (
            <div className="projects-grid">
                {listData && listData.map((item, i) => {
                    return (<ProjectCard key={i} item={item} />)
                })}
            </div>
        )
    }

    let showedTab = null
    if (activeTab === 0) {
        showedTab = returnCardList(ProjectData.React)
    } else if (activeTab === 1) {
        showedTab = returnCardList(ProjectData.Angular)
    } else if (activeTab === 2) {
        showedTab = returnCardList(ProjectData.NodeJS)
    } else if (activeTab === 3) {
        showedTab = returnCardList(ProjectData.Docker)
    }

    return (
        <div className="category-tabs">
            <Tabs activeTab={activeTab}
                onChange={(tabId) => setActiveTab(tabId)}
                ripple>
                <Tab>React</Tab>
                <Tab>Angular</Tab>
                <Tab>NodeJS</Tab>
                <Tab>Docker</Tab>
            </Tabs>

            <Grid>
                <Cell col={12}>
                    {showedTab}
                </Cell>
            </Grid>
        </div>
    )

}

export default Projects