import React, { useState } from 'react'
import { Tabs, Tab, Grid, Cell } from 'react-mdl'
import ProjectCard from './project-card'
import { projectsData } from '../../messages/english/projects.data'
import './projects.scss'

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
    Object.keys(projectsData).map((name, index) => {
        if(activeTab === index){
            showedTab = returnCardList(projectsData[name])
        }
        return null
    })

    return (
        <div className="code-main-style">
            <Tabs activeTab={activeTab}
                onChange={(tabId) => setActiveTab(tabId)}
                ripple>
                    {
                        Object.keys(projectsData).map((name, index) => {
                            return <Tab key={index}>{name}</Tab>
                        })
                    }
            </Tabs>

            <Grid style={{ height: '80vh' }}>
                <Cell col={12}>
                    {showedTab}
                </Cell>
            </Grid>
        </div>
    )

}

export default Projects