import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class ProjectCard extends Component {
    constructor(props){
        super(props)
        this.state = { activeTab: 0 };
    }
    render() {
        return (
           <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', 
                background: `url(${require(`../../img/${this.props.item.img}`)}) center / cover` }}>
                    {this.props.item.name}
                </CardTitle>
                <CardText>
                    {this.props.item.description}
                </CardText>
                <CardActions border>
                    <Button href={this.props.item.githubLink} colored>GitHub</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
           </Card>
        )
    }
}

export default ProjectCard